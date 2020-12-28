import React, { useMemo } from "react";
import { AppAnalytics } from "../analytics/AppAnalytics";
import { AppAnalyticsProvider } from "../analytics/AppAnalyticsProvider";
import { EthereumProvider } from "../ethereum/EthereumProvider";
import { TxHandler } from "../ethereum/TxHandler";
import { ThemeProvider, Themes } from "../themes";

export interface SerotoninProviderProps {
  initializeAnalytics(): Promise<AppAnalytics>;
  themes?: Themes;
  requiredChainId: number;
  rpcUrl: string;
}

export const SerotoninProvider: React.FC<SerotoninProviderProps> = ({
  children,
  themes,
  requiredChainId,
  rpcUrl,
  initializeAnalytics,
}) => {
  //   const analytics = useSafeAnalytics();
  //   useEffect(() => {
  //     handler.setAnalytics(analytics);
  //   }, [analytics]);

  const handler = useMemo(() => new TxHandler(), []);

  return (
    <ThemeProvider themes={themes}>
      <AppAnalyticsProvider initialize={initializeAnalytics}>
        <EthereumProvider
          handler={handler}
          requiredChainId={requiredChainId}
          rpcUrl={rpcUrl}
        >
          {children}
        </EthereumProvider>
      </AppAnalyticsProvider>
    </ThemeProvider>
  );
};
