import React from "react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { networkFactory } from "../ethereum/connectors";
import { useEagerConnect } from "./hooks";
import { useContext, useEffect } from "react";
import { TxHandler, TxHandlerContext } from "./TxHandler";
import { EthereumContext } from "./EthereumContext";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export interface EthereumProviderProps {
  handler: TxHandler;
  requiredChainId: number;
  rpcUrl: string;
  magicApiKey: string;
}
export const EthereumProvider: React.FC<EthereumProviderProps> = ({
  children,
  handler,
  requiredChainId,
  rpcUrl,
  magicApiKey,
}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <EthereumContext.Provider
        value={{ requiredChainId, rpcUrl, magicApiKey }}
      >
        <TxHandlerContext.Provider value={handler}>
          <ConnectionHandler>{children}</ConnectionHandler>
        </TxHandlerContext.Provider>
      </EthereumContext.Provider>
    </Web3ReactProvider>
  );
};

export const ConnectionHandler: React.FC = ({ children }) => {
  const { requiredChainId, rpcUrl } = useContext(EthereumContext);
  const service = useContext(TxHandlerContext);
  const { activate, active, library } = useWeb3React();
  const tried = useEagerConnect();

  // activate read only provider
  useEffect(() => {
    async function tryactivate() {
      if (tried && !active) {
        const network = await networkFactory(requiredChainId, rpcUrl);
        activate(network, () => {
          console.log("network error yo", network);
        });
      }
    }

    tryactivate();
  }, [tried]);

  // update tx handler with latest library
  useEffect(() => {
    service.setProvider(library);
  }, [service, library]);

  return <>{children}</>;
};
