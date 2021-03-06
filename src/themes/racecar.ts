import { buttonSizes } from "./types";
import { extendTheme } from "./extendTheme";

export const racecarTheme = extendTheme({
  backgroundColor: "#000",
  fonts: {
    serif: "Tungsten",
    sansSerif: "Helvetica Neue",
    mono: "Mono",
  },
  colors: {
    primary: {
      text: "#009ADA",
      gradient: ["#7D17FF 34.44%", "#250745 126.01%"],
      main: "#009ADA",
    },
    secondary: {
      text: "#009ADA",
      gradient: ["#7D17FF 34.44%", "#250745 126.01%"],
      main: "#7D17FF"
    },
    common: {
      white: "#fff",
      black: "#000"
    },
    inputs: {
      primary: {
        background: "transparent",
        label: "#000",
        border: "2px solid #fff",
        borderRadius: "0",
        placeholderColor: "#000",
        textColor: "#000"
      },
      secondary: {
        background: "#848484",
        label: "#000",
        border: "none",
        borderRadius: "0",
        placeholderColor: "#000",
        textColor: "#000"
      }
    },
  },
  containers: {
    highlight: {
      main: "#181818",
      text: "#fff",
      heading: "#fff",
      subheading: "#fff",
      border: "1px solid rgb(0,0,0,0.05)",
      borderRadius: "0",
    },
    card: {
      main: "#343434",
      text: "#fff",
      heading: "#fff",
      subheading: "#fff",
      border: "3px solid rgb(0,0,0,0.05)",
      borderRadius: "0",
    },
  },
  buttons: {
    paddingOverrides: {
      // Tungsten is annoyingly offset in its character box by 4px, so top and bottom padding have to adjust in order for button text to be centered
      [buttonSizes.SMALL]: "10px 12px 6px",
      [buttonSizes.SMALL_WIDE]: "10px 60px 6px",
      [buttonSizes.MEDIUM]: "12px 25px 8px",
      [buttonSizes.MEDIUM_WIDE]: "11px 30px 7px",
      [buttonSizes.LARGE]: "22px 50px 18px",
    },
    primary: {
      borderRadius: "0",
      font: "Helvetica Neue",
      fontSize: "20px",
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
        border: "3px solid #65636366",
        text: "#fff55",
      },
    },
    secondary: {
      borderRadius: "0",
      font: "Tungsten",
      fontSize: "26px",
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
      font: "Tungsten",
      fontSize: "26px",
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
      font: "Tungsten",
      fontSize: "26px",
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
