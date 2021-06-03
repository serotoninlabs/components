import { extendTheme } from "./extendTheme";

export const racecarTheme = extendTheme({
  backgroundColor: "#000",
  colors: {
    primary: {
      text: "#009ADA",
      gradient: ["#7D17FF 34.44%", "#250745 126.01%"],
    },
    secondary: {
      text: "#FED103"
    },
    common: {
      white: "#fff",
      black: "#000"
    },
    inputs: {
      background: "transparent",
      label: "#000",
      border: "2px solid #009ADA",
      borderRadius: "0",
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
        background: "#009ADA",
        border: "none",
        text: "white",
      },
      hover: {
        background: "#009ADA",
        border: "none",
        text: "white",
      },
      active: {
        background: "#009ADA",
        border: "none",
        text: "white",
      },
      focus: {
        background: "#009ADA",
        border: "none",
        text: "white",
      },
      disabled: {
        background: "#0007",
        border: "3px solid #fff",
        text: "#fff55",
      },
    },
    inverted: {
      borderRadius: "0",
      base: {
        background: "transparent",
        border: "2px solid white",
        text: "white",
      },
      hover: {
        background: "transparent",
        border: "2px solid white",
        text: "white",
      },
      active: {
        background: "transparent",
        border: "2px solid white",
        text: "white",
      },
      focus: {
        background: "transparent",
        border: "2px solid white",
        text: "white",
      },
      disabled: {
        background: "transparent",
        border: "3px solid #fff55",
        text: "#fff55",
      },
    },
    tertiary: {
      borderRadius: "10px",
      base: {
        background: "linear-gradient(155.28deg, #7D17FF 34.44%, #250745 126.01%)",
        border: "none",
        text: "white",
      },
      hover: {
        background: "linear-gradient(155.28deg, #7D17FF 34.44%, #250745 126.01%)",
        border: "none",
        text: "white",
      },
      active: {
        background: "linear-gradient(155.28deg, #7D17FF 34.44%, #250745 126.01%)",
        border: "none",
        text: "white",
      },
      focus: {
        background: "linear-gradient(155.28deg, #7D17FF 34.44%, #250745 126.01%)",
        border: "none",
        text: "white",
      },
      disabled: {
        background: "#0007",
        border: "3px solid #fff55",
        text: "#fff55",
      },
    },
  },
});
