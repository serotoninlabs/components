import React from "react";
import styled from "styled-components";

export const CardGridContainer = styled.div<CardGridProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > a {
    margin: 15px;
    height: 100%;
  }
  > div {
    margin: 15px;
  }
`;

export interface CardGridProps {}
export const CardGrid: React.FC = ({ children }) => {
  return <CardGridContainer>{children}</CardGridContainer>;
};
