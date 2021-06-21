import { DefaultTheme } from "styled-components";

export enum buttonSizes {
  SMALL = "SMALL",
  SMALL_WIDE = "SMALL_WIDE",
  MEDIUM = "MEDIUM",
  MEDIUM_WIDE = "MEDIUM_WIDE",
  LARGE = "LARGE",
  NEW_MEDIUM = "NEW_MEDIUM",
}

export interface IPalette {
  main: string;
  text: string;
  heading?: string;
  subheading?: string;
  scaled?: string;
  gradient?: string[];
  border?: string;
  borderRadius?: string;
}

export interface ButtonStyleProps {
  background: string;
  text: string;
  border: string;
  // backgroundImage?: string;
}
export interface ButtonStyleStates {
  borderRadius?: string;
  font?: string;
  fontSize?: string;
  base: ButtonStyleProps;
  disabled: ButtonStyleProps;
  hover: ButtonStyleProps;
  active: ButtonStyleProps;
  focus: ButtonStyleProps;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      serif: string;
      sansSerif: string;
      mono: string;
    };
    buttons: {
      paddingOverrides?: Partial<{ [key in buttonSizes]: string }>;
      primary: ButtonStyleStates;
      secondary: ButtonStyleStates;
      inverted: ButtonStyleStates;
      tertiary: ButtonStyleStates;
    };
    containers: {
      highlight: IPalette;
      card: IPalette;
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
        primary: {
          background: string;
          label: string;
          border: string;
          borderRadius: string;
          textColor: string;
          placeholderColor: string;
        },
        secondary: {
          background: string;
          label: string;
          border: string;
          borderRadius: string;
          textColor: string;
          placeholderColor: string;
        }
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

export type Theme = DefaultTheme;
export type ThemeOverride = RecursivePartial<DefaultTheme>;
