import { ThemeOverride } from "./types";
import { extendTheme } from "./extendTheme";

export const racecarTheme = extendTheme({
  backgroundColor: "#3F3F3F",
  colors: {
    primary: {
      text: "rgb(215, 221, 221)",
    },
  },
  buttons: {
    primary: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "3px solid #009ADA",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "3px solid #009ADA",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "3px solid #009ADA",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "3px solid #009ADA",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "3px solid #eebc0f55",
        text: "#fff55",
      },
    },
    secondary: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "3px solid #FED103",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "3px solid #FED103",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "3px solid #FED103",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "3px solid #FED103",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "3px solid rgba(24, 226, 172, 0.33)",
        text: "#fff55",
      },
    },
    inverted: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "3px solid white",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "3px solid white",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "3px solid white",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "3px solid white",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "3px solid #fff55",
        text: "#fff55",
      },
    },
  },
});
