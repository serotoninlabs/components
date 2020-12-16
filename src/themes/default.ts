import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "3px",
  backgroundColor: "#F9FAFC", // grey
  fonts: {
    serif: "Nunito",
    sansSerif: "Nunito Sans",
  },
  colors: {
    common: {
      white: "white",
      black: "black",
    },
    primary: {
      main: "#FFFFFF",
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
      background: "white",
      label: "#aaa",
      border: "1px solid black",
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
