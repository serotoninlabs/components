import React from "react";
import { createContext, useMemo, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { defaultTheme } from "./default";
import { themes } from "./themes";

export interface ThemeContextProps {
  setTheme: (name: keyof typeof themes) => void;
  currentTheme: DefaultTheme;
  themeName: keyof typeof themes;
}
// @ts-ignore
export const ThemeProviderContext = createContext<ThemeContextProps>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [[name, theme], setTheme] = useState<
    [keyof typeof themes, DefaultTheme]
  >(["default", defaultTheme]);

  const val = useMemo(() => {
    return {
      setTheme(nextThemeName: keyof typeof themes) {
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
