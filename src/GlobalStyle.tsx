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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: ${px2vw(12)};
    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }
    @media (min-width: 1024px) {
      font-size: ${px2vw(12)};
    }
  }

  @media (max-width: 768px) {
    font-size: ${px2vw(32)};
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12)};
  }

  ul, ol {
    margin: 10px;
  }

`;
