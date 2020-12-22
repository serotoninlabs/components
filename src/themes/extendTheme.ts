import defaultsDeep from "lodash/defaultsDeep";
import { DefaultTheme } from "styled-components";
import { defaultTheme } from "./default";
import { ThemeOverride } from "./types";

export function extendTheme(theme: ThemeOverride): DefaultTheme {
  return defaultsDeep(theme, defaultTheme);
}
