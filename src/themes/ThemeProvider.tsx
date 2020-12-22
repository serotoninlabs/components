import React from "react";
import { createContext, useMemo, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { themes as internalThemes, Themes } from "./themes";

export interface ThemeContextProps {
  setTheme: (name: string) => void;
  currentTheme: DefaultTheme;
  themeName: string;
}
// @ts-ignore
export const ThemeProviderContext = createContext<ThemeContextProps>(undefined);

export interface ThemeProviderProps {
  themes?: Themes;
  startingTheme?: string;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themes: externalThemes,
  startingTheme,
}) => {
  const themes = useMemo(() => {
    const rtn = externalThemes || {};
    Object.keys(internalThemes).map((key) => {
      if (!rtn[key]) {
        rtn[key] = internalThemes[key];
      }
    });

    return rtn;
  }, [externalThemes]);

  const [[name, theme], setTheme] = useState<[string, DefaultTheme]>([
    startingTheme || "default",
    themes[startingTheme || "default"],
  ]);

  const val = useMemo(() => {
    return {
      setTheme(nextThemeName: string) {
        const nextTheme = themes[nextThemeName];
        console.log(
          "changing theme",
          { current: name, next: nextThemeName },
          nextTheme
        );
        if (!nextTheme) {
          console.log("theme not found", name, Object.keys(themes));
          throw new Error("theme not found");
        }
        if (nextTheme != theme) {
          console.log("changing theme", name, nextTheme);
          setTheme([nextThemeName, nextTheme]);
        }
      },
      currentTheme: theme,
      themeName: name,
    };
  }, [theme]);
  return (
    <ThemeProviderContext.Provider value={val}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeProviderContext.Provider>
  );
};
