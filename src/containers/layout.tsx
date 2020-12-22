import React from "react";
import styled from "styled-components";
import { px2vw } from "../utils/px2vw";

export const Section = styled.section`
  margin: 10px 0;
  color: ${(props) => props.theme.colors.primary.text};
`;

export const GrowingDiv = styled.div`
  flex-grow: 1;
`;

export interface RowContainerProps {
  align?: string;
}
export const RowContainer = styled.div<RowContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center};
  justify-content: ${(props) => (props.align ? props.align : "center")};
`;

export const FiftyFifty = styled(RowContainer)`
  > div {
    flex-grow: 1;
    height: 100%;
    max-width: 40%;
    flex-wrap: wrap;
  }
`;

export const MainContentContainer = styled(Section)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;

  > div {
    @media (max-width: 768px) {
      width: 100%;
      margin: 0 20px;
      min-height: ${px2vw(200, 768)};
      height: 100%;
    }

    @media (min-width: 768px) {
      width: 768px;
      min-height: ${px2vw(200, 768)};
      height: 100%;
    }

    @media (min-width: 1024px) {
      width: 1024px;
      min-height: ${px2vw(300)};
      height: 100%;
    }

    @media (min-width: 1280px) {
      width: 1280px;
      min-height: ${px2vw(300)};
      height: 100%;
    }
  }
`;

export const MainContent: React.FC = ({ children }) => {
  return (
    <MainContentContainer>
      <div>{children}</div>
    </MainContentContainer>
  );
};
