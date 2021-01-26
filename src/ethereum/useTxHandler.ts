import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import {
  TransactionInput,
  TransactionData,
  TxHandlerContext,
  TxStatus,
} from "./TxHandler";

export interface TxHandlerOutput {
  submit(id: string, input: TransactionInput): Promise<void>;
  clear(id: string): void;
  tx?: TransactionData;
  status: TxStatus;
}

export function useTxHandler(id: string): TxHandlerOutput {
  const service = useContext(TxHandlerContext);
  const [tx, setTx] = useState<TransactionData>();
  useEffect(() => {
    const handle = service.register((nextState) => {
      console.log("state update", nextState);
      const updatedTx = nextState.transactions.get(id);
      if (updatedTx) {
        const txJS = updatedTx.toJS();
        setTx(txJS);
      } else {
        setTx(undefined);
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
    status: tx?.status || "new",
  };
}
