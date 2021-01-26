import React from "react";

export interface EthereumContextProps {
  requiredChainId: number;
  rpcUrl: string;
  magicApiKey: string;
}
export const EthereumContext = React.createContext<EthereumContextProps>({
  requiredChainId: -1,
  rpcUrl: "",
  magicApiKey: "",
});
