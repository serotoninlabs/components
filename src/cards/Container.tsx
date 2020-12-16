import React from "react";
import styled from "styled-components";
import { media } from "../utils/media";

export type ContainerSize = "full" | "small" | "medium" | "large";

const containerSizes = {
  mobile: {
    small: "400px",
    medium: "200px",
    large: "400px",
    full: "100%",
  },
  tablet: {
    small: "300px",
    medium: "200px",
    large: "400px",
    full: "100%",
  },
  desktop: {
    small: "395px",
    medium: "400px",
    large: "800px",
    full: "100%",
  },
  fullhd: {
    small: "395px",
    medium: "400px",
    large: "800px",
    full: "100%",
  },
};

const fontSizes = {
  small: "1rem",
  medium: "1.2rem",
  large: "1.5rem",
  full: "2rem",
};

export const Container = styled.div<{ size?: ContainerSize }>`
  font-size: ${(props) => fontSizes[props.size || "full"]};
  > h2 {
    font-size: ${(props) => fontSizes[props.size || "full"]};
  }
  ${media.mobile} {
    min-width: ${(props) => containerSizes.mobile[props.size || "full"]};
    width: ${(props) => containerSizes.mobile[props.size || "full"]};
  }
  ${media.tablet} {
    min-width: ${(props) => containerSizes.tablet[props.size || "full"]};
    width: ${(props) => containerSizes.tablet[props.size || "full"]};
  }
  ${media.laptop} {
    min-width: ${(props) => containerSizes.fullhd[props.size || "full"]};
    width: ${(props) => containerSizes.fullhd[props.size || "full"]};
  }
  ${media.desktop} {
    min-width: ${(props) => containerSizes.desktop[props.size || "full"]};
    width: ${(props) => containerSizes.desktop[props.size || "full"]};
  }
`;
