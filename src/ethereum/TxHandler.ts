import { ContractTransaction, ethers, Transaction } from "ethers";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Map, Set, Record } from "immutable";
import { Provider } from "@ethersproject/providers";
import { AppAnalytics } from "../analytics/AppAnalytics";

export const ErrorTxSignatureRejected = "rejected transaction signature";

export type TxStatus =
  | "new"
  | "signature"
  | "pending"
  | "complete"
  | "rejected"
  | "error";

const TxRecord = Record<TransactionData>({
  link: undefined,
  meta: undefined,
  status: "new",
  error: undefined,
  tx: undefined,
  receipt: undefined,
});

export type TransactionInput = {
  tx?: Promise<ethers.ContractTransaction>;
  link?: string;
  meta?: any;
};

export type TransactionData = {
  link?: string;
  meta?: any;
  status?: TxStatus;
  error?: string;
  tx?: ContractTransaction;
  receipt?: ethers.providers.TransactionReceipt;
};

export interface State {
  transactions: Map<string, Record<TransactionData>>;
  statuses: Map<TxStatus, Set<string>>;
}

export class TxHandler {
  private analytics!: AppAnalytics;
  private provider!: Provider;
  private state: State;
  private callbacks: {
    [key: string]: (state: State, previousState?: State) => void;
  };

  constructor() {
    this.state = createDefaultState();
    this.callbacks = {};
  }

  public setAnalytics(analytics: AppAnalytics) {
    this.analytics = analytics;
  }

  public setProvider(provider: Provider): void {
    this.provider = provider;
  }

  public getState(): State {
    return this.state;
  }

  public register(callback: (state: State) => void): string {
    const id = uuidv4();
    this.callbacks[id] = callback;
    return id;
  }

  public unregister(id: string): void {
    delete this.callbacks[id];
  }

  public submitTransaction(id: string, input: TransactionInput): Promise<void> {
    if (this.state.transactions.get(id)) {
      throw new Error("transaction with this ID already exists");
    }
    return this.handleTransaction(id, input);
  }

  public clearTransaction(id: string): void {
    const tx = this.state.transactions.get(id);
    if (tx) {
      this.updateState({
        transactions: this.state.transactions.delete(id),
        statuses: this.state.statuses.deleteIn([tx.get("status"), id]),
      });
    }
  }

  private async handleTransaction(
    key: string,
    input: TransactionInput
  ): Promise<void> {
    this.updateState({
      transactions: this.state.transactions.set(
        key,
        TxRecord({
          status: "signature",
          link: input.link,
          meta: input.meta,
        })
      ),
      statuses: this.state.statuses.updateIn(["signature"], (set) =>
        set.add(key)
      ),
    });

    this.analytics.logEvent("eth-tx-created", { id: key });

    // wait for tx to have a hash
    let tx: ContractTransaction;
    try {
      tx = await input.tx!;
      // remove from unsubmitted and add to pending
      this.updateState({
        transactions: this.state.transactions
          .setIn([key, "status"], "pending")
          .setIn([key, "tx"], tx),
        statuses: this.state.statuses
          .updateIn(["signature"], (set) => set.delete(key))
          .updateIn(["pending"], (set) => set.add(key)),
      });

      this.analytics.logEvent("eth-tx-submitted", { id: key, hash: tx.hash });
    } catch (err) {
      // remove from unsubmitted and add to errors
      this.updateState({
        transactions: this.state.transactions
          .setIn([key, "status"], "rejected")
          .setIn([key, "error"], ErrorTxSignatureRejected),
        statuses: this.state.statuses
          .updateIn(["signature"], (set) => set.delete(key))
          .updateIn(["error"], (set) => set.add(key)),
      });
      console.log(
        "tx rejected",
        key,
        err.message,
        this.state.transactions.toJS()
      );
      this.analytics.logEvent("eth-tx-rejected", { id: key });
      return;
    }

    // wait for transaction to mine
    try {
      const receipt = await this.provider.waitForTransaction(tx.hash);
      console.log("tx mined", tx.hash, receipt);
      // update status
      this.updateState({
        transactions: this.state.transactions
          .setIn([key, "status"], "complete")
          .setIn([key, "receipt"], receipt),
        statuses: this.state.statuses
          .updateIn(["pending"], (set) => set.delete(key))
          .updateIn(["complete"], (set) => set.add(key)),
      });
      this.analytics.logEvent("eth-tx-complete", { id: key, hash: tx.hash });

      return;
    } catch (err) {
      // remove from unsubmitted and add to errors
      this.updateState({
        transactions: this.state.transactions
          .setIn([key, "status"], "error")
          .setIn([key, "error"], err),
        statuses: this.state.statuses
          .updateIn(["pending"], (set) => set.delete(key))
          .updateIn(["error"], (set) => set.add(key)),
      });
      return;
    }
  }

  private onStateChange(state: State, previousState: State): void {
    for (const callback in this.callbacks) {
      this.callbacks[callback](state, previousState);
    }
  }

  private updateState(state: State): void {
    const previousState = this.state;
    this.state = state;
    this.onStateChange(state, previousState);
  }
}

function createDefaultState(): State {
  return {
    transactions: Map(),
    statuses: Map<TxStatus, Set<string>>()
      .set("complete", Set())
      .set("error", Set())
      .set("new", Set())
      .set("pending", Set())
      .set("rejected", Set())
      .set("signature", Set()),
  };
}

const handler = new TxHandler();
export const TxHandlerContext = createContext<TxHandler>(handler);
