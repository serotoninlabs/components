import React, { useContext, useEffect, useState } from "react";
import { AppAnalytics, ConsoleAnalytics } from "./AppAnalytics";

export interface AppAnalyticsContextProps {
  analytics: AppAnalytics;
}
export const AppAnalyticsContext = React.createContext({
  analytics: new ConsoleAnalytics(),
});

export interface AppAnalyticsProviderProps {
  initialize(): Promise<AppAnalytics>;
}
export const AppAnalyticsProvider: React.FC<AppAnalyticsProviderProps> = ({
  children,
  initialize,
}) => {
  const [analytics, setAnalytics] = useState(new ConsoleAnalytics());

  useEffect(() => {
    initialize().then((_analytics) => {
      console.log("initialized analytics", _analytics);
      setAnalytics(_analytics);
    });
  }, [initialize]);

  return (
    <AppAnalyticsContext.Provider value={{ analytics }}>
      {children}
    </AppAnalyticsContext.Provider>
  );
};

export function useAppAnalytics(): AppAnalyticsContextProps {
  return useContext(AppAnalyticsContext);
}
