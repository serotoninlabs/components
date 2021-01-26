import React, { useMemo } from "react";
import { AppAnalytics } from "../analytics/AppAnalytics";
import { AppAnalyticsProvider } from "../analytics/AppAnalyticsProvider";
import {
  EthereumProvider,
  EthereumProviderProps,
} from "../ethereum/EthereumProvider";
import { TxHandler } from "../ethereum/TxHandler";
import { ThemeProvider, Themes } from "../themes";

export type SerotoninProviderProps = {
  initializeAnalytics(): Promise<AppAnalytics>;
  themes?: Themes;
} & Omit<EthereumProviderProps, "handler">;

export const SerotoninProvider: React.FC<SerotoninProviderProps> = ({
  children,
  themes,
  requiredChainId,
  rpcUrl,
  initializeAnalytics,
  magicApiKey,
}) => {
  const handler = useMemo(() => new TxHandler(), []);

  async function analyticsAdjusted() {
    return initializeAnalytics().then((analytics) => {
      handler.setAnalytics(analytics);
      return analytics;
    });
  }

  return (
    <ThemeProvider themes={themes}>
      <AppAnalyticsProvider initialize={analyticsAdjusted}>
        <EthereumProvider
          handler={handler}
          requiredChainId={requiredChainId}
          rpcUrl={rpcUrl}
          magicApiKey={magicApiKey}
        >
          {children}
        </EthereumProvider>
      </AppAnalyticsProvider>
    </ThemeProvider>
  );
};
