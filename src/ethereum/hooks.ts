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
            activate(injected, undefined, true).catch(() => {
              setTried(true);
            });
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
