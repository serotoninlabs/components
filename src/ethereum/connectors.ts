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

// import { NetworkConnector } from "@web3-react/network-connector";
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
// import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { SquarelinkConnector } from '@web3-react/squarelink-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
// import { NetworkConnector } from "./TempNetworkConnector";

// const requiredChainId = parseInt(process.env.NEXT_PUBLIC_REQUIRED_CHAIN_ID);

// const POLLING_INTERVAL = 12000;
// const RPC_URLS: { [chainId: number]: string } = {
//   [chainId]: process.env.NEXT_PUBLIC_RPC_URL as string,
// };

// export const walletconnect = new WalletConnectConnector({
//   rpc: { 1: RPC_URLS[1] },
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL
// })

// export const walletlink = new WalletLinkConnector({
//   url: RPC_URLS[1],
//   appName: 'web3-react example'
// })

// export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })

// export const trezor = new TrezorConnector({
//   chainId: 1,
//   url: RPC_URLS[1],
//   pollingInterval: POLLING_INTERVAL,
//   manifestEmail: 'dummy@abc.xyz',
//   manifestAppUrl: 'http://localhost:1234'
// })

// export const frame = new FrameConnector({ supportedChainIds: [1] })

// export const authereum = new AuthereumConnector({ chainId: 42 })

// export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

// export const magic = new MagicConnector({
//   apiKey: process.env.MAGIC_API_KEY as string,
//   chainId: 4,
//   email: 'hello@example.org'
// })

// export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })

// export const squarelink = new SquarelinkConnector({
//   clientId: process.env.SQUARELINK_CLIENT_ID as string,
//   networks: [1, 100]
// })

// export const torus = new TorusConnector({ chainId: 1 })
