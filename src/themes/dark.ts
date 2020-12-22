import { ThemeOverride } from "./types";
import { extendTheme } from "./extendTheme";

const darkPartial: ThemeOverride = {
  fonts: {
    serif: "Montserrat",
    sansSerif: "Montserrat",
  },
  backgroundColor: "#2D2D2D",
  colors: {
    primary: {
      main: "#271D20",
      gradient: ["#FFFFFF", "#000000"],
      border: "1px solid #131313",
    },
    secondary: {
      main: "#3B3435",
      gradient: ["red", "blue", "green"],
      text: "white",
    },
    inputs: {
      background: "#271D20",
      label: "white",
      border: "1px solid red",
    },
  },
};

export const darkTheme = extendTheme(darkPartial);
