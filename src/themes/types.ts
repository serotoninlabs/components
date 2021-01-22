import { DefaultTheme } from "styled-components";

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
}
export interface ButtonStyleStates {
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
      primary: ButtonStyleStates;
      secondary: ButtonStyleStates;
      inverted: ButtonStyleStates;
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
