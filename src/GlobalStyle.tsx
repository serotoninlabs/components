import { createGlobalStyle } from "styled-components";
import { px2vw } from "./utils/px2vw";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: '${(props) => props.theme.fonts.sansSerif}', sans-serif;
    min-height: 100vh;
  }
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1,h2,h3,h4 {
    margin: 0;
  }
  a, a:visited {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }

  button.button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  
    @media screen and (-ms-high-contrast: active) {
      border: 2px solid currentcolor;
    }
  }
  
  ul, ol {
    margin: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: 16;
    @media (min-width: 768px) {
      font-size: 16;
    }
    @media (min-width: 1024px) {
      font-size: 16;
    }
  }

`;
