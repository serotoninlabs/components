import { ThemeOverride } from "./types";
import { extendTheme } from "./extendTheme";

export const racecarTheme = extendTheme({
  backgroundColor: "#3F3F3F",
  colors: {
    primary: {
      text: "#009ADA",
    },
    secondary: {
      text: "#FED103"
    },
    common: {
      white: "#fff",
      black: "#000"
    }
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
    gradient: {
      borderRadius: "10px",
      base: {
        backgroundImage: "linear-gradient(155.28deg, rgba(131, 51, 244, 0.89) 34.44%, #35105B 126.01%)",
        background: "none",
        border: "none",
        text: "white",
      },
      hover: {
        backgroundImage: "linear-gradient(155.28deg, rgba(131, 51, 244, 0.89) 34.44%, #35105B 126.01%)",
        background: "none",
        border: "none",
        text: "white",
      },
      active: {
        backgroundImage: "linear-gradient(155.28deg, rgba(131, 51, 244, 0.89) 34.44%, #35105B 126.01%)",
        background: "none",
        border: "none",
        text: "white",
      },
      focus: {
        backgroundImage: "linear-gradient(155.28deg, rgba(131, 51, 244, 0.89) 34.44%, #35105B 126.01%)",
        background: "none",
        border: "none",
        text: "white",
      },
      disabled: {
        backgroundImage: "transparent",
        background: "#0007",
        border: "3px solid #fff55",
        text: "#fff55",
      },
    },
  },
});
