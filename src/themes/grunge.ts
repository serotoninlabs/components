import { ThemeOverride } from "./types";
import { extendTheme } from "./extendTheme";

export const grungeTheme = extendTheme({
  backgroundColor: "black",
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
        border: "4px solid #eebc0f",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "4px solid #eebc0f",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "4px solid #eebc0f",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "4px solid #eebc0f",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "4px solid #eebc0f55",
        text: "#ffffff55",
      },
    },
    secondary: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "4px solid rgb(24, 226, 172)",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "4px solid rgb(24, 226, 172)",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "4px solid rgb(24, 226, 172)",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "4px solid rgb(24, 226, 172)",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "4px solid rgba(24, 226, 172, 0.33)",
        text: "#ffffff55",
      },
    },
    inverted: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "4px solid white",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "4px solid white",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "4px solid white",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "4px solid white",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "4px solid #ffffff55",
        text: "#ffffff55",
      },
    },
    gradient: {
      borderRadius: "4px",
      base: {
        backgroundImage: "linear-gradient(#eebc0f, #eebc0f)",
        background: "#eebc0f",
        text: "#000",
        border: "none",
      },
      disabled: {
        backgroundImage: "linear-gradient(rgb(215, 221, 221), rgb(215, 221, 221))",
        background: "rgb(215, 221, 221)",
        text: "#000",
        border: "none",
      },
      hover: {
        backgroundImage: "none",
        background: "#eebc0f",
        text: "#000",
        border: "none",
      },
      active: {
        backgroundImage: "none",
        background: "#eebc0f",
        text: "#000",
        border: "none",
      },
      focus: {
        backgroundImage: "none",
        background: "#eebc0f",
        text: "#000",
        border: "none",
      },
    },
  },
});
