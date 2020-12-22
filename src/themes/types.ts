import { DefaultTheme } from "styled-components";

export interface IPalette {
  main: string;
  text: string;
  gradient: string[];
  border?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      serif: string;
      sansSerif: string;
    };
    backgroundColor: string;
    borderRadius: string;
    colors: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      inputs: {
        background: string;
        label: string;
        border: string;
      };
      notifications: {
        default: IPalette;
        info: IPalette;
        warning: IPalette;
        error: IPalette;
      };
    };
  }
}

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type ThemeOverride = RecursivePartial<DefaultTheme>;
