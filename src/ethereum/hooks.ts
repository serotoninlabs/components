import { useState, useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";

import { injectedFactory, magicFactory } from "../ethereum/connectors";
import { BigNumber } from "ethers";
import { EthereumContext } from "./EthereumContext";

export function useEagerConnect() {
  const { requiredChainId, magicApiKey } = useContext(EthereumContext);
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    async function tryInjected() {
      const walletChoice = localStorage.getItem("WALLET_CHOICE");
      if (!walletChoice) {
        setTried(true);
        return;
      }

      console.log("stored wallet choice:", walletChoice);
      switch (walletChoice) {
        case "metamask":
          const injected = await injectedFactory(requiredChainId);
          // @ts-ignore AbstractConnector doesn't have this method but injected does, this should be fixed
          const isAuthorized: boolean = await injected.isAuthorized();
          if (isAuthorized) {
            let injectedChainId = await injected.getChainId();
            if (
              typeof injectedChainId === "string" &&
              injectedChainId.startsWith("0x")
            ) {
              injectedChainId = BigNumber.from(injectedChainId).toNumber();
            }

            if (injectedChainId === requiredChainId) {
              activate(injected, undefined, true).catch(() => {
                setTried(true);
              });
            } else {
              console.log(
                "detected an injected web3, but it is on the wrong network",
                { injectedChainId, requiredChainId: requiredChainId }
              );
            }
          }
          break;
        case "magic":
          const email = localStorage.getItem("MAGIC_EMAIL");
          const magic = await magicFactory(
            magicApiKey,
            requiredChainId,
            email!
          );
          activate(magic, undefined, true).catch(() => {
            setTried(true);
          });
          break;
      }
    }

    tryInjected();
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

// export function useInactiveListener(suppress: boolean = false) {
//   const { active, error, activate } = useWeb3React();

//   useEffect((): any => {
//     const { ethereum } = window as any;
//     if (ethereum && ethereum.on && !active && !error && !suppress) {
//       const handleConnect = () => {
//         console.log("Handling 'connect' event");
//         activate(injected);
//       };
//       const handleChainChanged = (chainId: string | number) => {
//         console.log("Handling 'chainChanged' event with payload", chainId);
//         activate(injected);
//       };
//       const handleAccountsChanged = (accounts: string[]) => {
//         console.log("Handling 'accountsChanged' event with payload", accounts);
//         if (accounts.length > 0) {
//           activate(injected);
//         }
//       };
//       const handleNetworkChanged = (networkId: string | number) => {
//         console.log("Handling 'networkChanged' event with payload", networkId);
//         activate(injected);
//       };

//       ethereum.on("connect", handleConnect);
//       ethereum.on("chainChanged", handleChainChanged);
//       ethereum.on("accountsChanged", handleAccountsChanged);
//       ethereum.on("networkChanged", handleNetworkChanged);

//       return () => {
//         if (ethereum.removeListener) {
//           ethereum.removeListener("connect", handleConnect);
//           ethereum.removeListener("chainChanged", handleChainChanged);
//           ethereum.removeListener("accountsChanged", handleAccountsChanged);
//           ethereum.removeListener("networkChanged", handleNetworkChanged);
//         }
//       };
//     }
//   }, [active, error, suppress, activate]);
// }
