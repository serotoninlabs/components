import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { Transaction, TxHandlerContext } from "./TxHandler";

export interface TxHandlerOutput {
  submit(id: string, input: Transaction): Promise<void>;
  clear(id: string): void;
  tx?: Transaction;
}

export function useTxHandler(id: string): TxHandlerOutput {
  const service = useContext(TxHandlerContext);
  const [tx, setTx] = useState<Transaction>();
  const [status, setStatus] = useState("new");
  const [error, setError] = useState<string>();
  const [receipt, setReceipt] = useState<ethers.providers.TransactionReceipt>();

  useEffect(() => {
    const handle = service.register((nextState) => {
      console.log("state update", nextState);
      const updatedTx = nextState.transactions.get(id);
      console.log("updatedTx", updatedTx && updatedTx.toJS());
      if (updatedTx) {
        setTx(updatedTx.toJS());
      } else {
        setStatus("new");
        setError(undefined);
      }
    });

    return () => {
      service.unregister(handle);
    };
  }, []);

  return {
    submit: service.submitTransaction.bind(service),
    clear: service.clearTransaction.bind(service),
    tx,
  };
}
