import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "3px",
  backgroundColor: "#F3F3F3", // grey
  fonts: {
    serif: "Nunito",
    sansSerif: "Inter",
    mono: "Roboto Mono",
  },
  buttons: {
    primary: {
      base: {
        background: "#000",
        text: "#fff",
        border: "1px solid #000",
      },
      disabled: {
        background: "#ddd",
        text: "#aaa",
        border: "none",
      },
      hover: {
        background: "#444",
        text: "#fff",
        border: "1px solid #000",
      },
      active: {
        background: "#000",
        text: "#fff",
        border: "1px solid #000",
      },
      focus: {
        background: "#666",
        text: "#fff",
        border: "1px solid #222",
      },
    },
    inverted: {
      base: {
        background: "#fff",
        text: "#000",
        border: "1px solid #000",
      },
      disabled: {
        background: "#ddd",
        text: "#aaa",
        border: "none",
      },
      hover: {
        background: "#fff",
        text: "blue",
        border: "1px solid blue",
      },
      active: {
        background: "#000",
        text: "#fff",
        border: "none",
      },
      focus: {
        background: "#000",
        text: "#fff",
        border: "none",
      },
    },
    secondary: {
      base: {
        background: "#FEA8A7",
        text: "#fff",
        border: "none",
      },
      disabled: {
        background: "#f2d9d9",
        text: "#fff",
        border: "none",
      },
      hover: {
        background: "#fe9c9a",
        text: "#fff",
        border: "none",
      },
      active: {
        background: "#000",
        text: "#fff",
        border: "1px solid #000",
      },
      focus: {
        background: "#000",
        text: "#fff",
        border: "1px solid #000",
      },
    },
    tertiary: {
      base: {
        background: "none",
        text: "#fff",
        border: "1px solid #000",
      },
      disabled: {
        background: "none",
        text: "#fff",
        border: "1px solid #0007",
      },
      hover: {
        background: "none",
        text: "#fff",
        border: "1px solid #000",
      },
      active: {
        background: "none",
        text: "#fff",
        border: "1px solid #000",
      },
      focus: {
        background: "none",
        text: "#fff",
        border: "1px solid #000",
      },
    },
  },
  containers: {
    highlight: {
      main: "#F6E6E7",
      text: "#999",
      heading: "#000",
      subheading: "#999",
      border: "1px solid rgb(0,0,0,0.05)",
      borderRadius: "12px",
    },
    card: {
      main: "#fff",
      text: "#999",
      heading: "#000",
      subheading: "#999",
      border: "1px solid rgb(0,0,0,0.05)",
      borderRadius: "20px",
    },
  },
  colors: {
    common: {
      white: "white",
      black: "black",
    },
    primary: {
      main: "#000000",
      gradient: ["#FFFFFF", "#000000"],
      text: "#3F4551",
      border: "1px solid #dfdfdf",
    },
    secondary: {
      // main: "rgb(56,137,198)",
      main: "#f0f0f0",
      gradient: [
        "rgb(116, 116, 191)",
        "rgb(52, 138, 199)",
        "rgb(56, 137, 198)",
      ],
      text: "white",
    },
    inputs: {
      primary: {
        background: "white",
        label: "#000",
        border: "1px solid #999",
        borderRadius: "6px",
        placeholderColor: "#000",
        textColor: "#000"
      },
      secondary: {
        background: "transparent",
        label: "#000",
        border: "2px solid #000",
        borderRadius: "0",
        placeholderColor: "#000",
        textColor: "#000"
      }
    },
    notifications: {
      default: {
        main: "#ddd",
        gradient: ["#ddd", "#ddd", "#ddd"],
        text: "#333",
        border: "#888",
      },
      info: {
        main: "#ebfafd",
        gradient: ["#ebfafd", "#ebfafd", "#ebfafd"],
        text: "#5db3c0",
        border: "#05c2e2",
      },
      warning: {
        main: "#fffaf3",
        gradient: ["#fffaf3", "#fffaf3", "#fffaf3"],
        text: "#573a08",
        border: "#c9ba9b",
      },
      error: {
        main: "red",
        gradient: ["red", "red", "red"],
        text: "darkred",
      },
    },
  },
};
