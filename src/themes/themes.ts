import { DefaultTheme } from "styled-components";
import { darkTheme } from "./dark";
import { defaultTheme } from "./default";

export type Themes = { [key: string]: DefaultTheme };

export const themes: Themes = {
  default: defaultTheme,
  dark: darkTheme,
};
