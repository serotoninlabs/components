import { AbstractConnector } from "@web3-react/abstract-connector";

export async function injectedFactory(
  requiredChainId: number
): Promise<AbstractConnector> {
  const InjectedConnectorModule = await import(
    "@web3-react/injected-connector"
  );
  return new InjectedConnectorModule.InjectedConnector({
    supportedChainIds: [requiredChainId],
  });
}

export async function networkFactory(
  requiredChainId: number,
  rpcUrl: string
): Promise<AbstractConnector> {
  const NetworkConnectorModule = await import("./TempNetworkConnector");
  console.log("loaded networkconnector", requiredChainId, rpcUrl);
  return new NetworkConnectorModule.NetworkConnector({
    urls: {
      [requiredChainId]: rpcUrl,
    },
    defaultChainId: requiredChainId,
  });
}

export async function magicFactory(
  apiKey: string,
  requiredChainId: number,
  email: string
): Promise<AbstractConnector> {
  const MagicConnectorModule = await import("@web3-react/magic-connector");

  return new MagicConnectorModule.MagicConnector({
    apiKey,
    chainId: requiredChainId,
    email,
  });
}
