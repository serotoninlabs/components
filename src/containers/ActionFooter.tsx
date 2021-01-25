import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../buttons";
import { Text } from "../text";
import { GrowingDiv, MainContent } from "./layout";

const ActionFooterContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: ${(props) => props.theme.buttons.primary.base.background};
  color: ${(props) => props.theme.buttons.primary.base.text};
  > section > div {
    min-height: 60px;
    display: flex;
    flex-direction: row;
    > :first-child {
      color: ${(props) => props.theme.buttons.primary.base.text};
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    > :nth-child(2) {
      color: white;
      text-decoration: underline;
    }
  }
`;

export interface ActionFooter {
  message: string;
  button1?: React.ReactElement;
  button2?: React.ReactElement;
}
export const ActionFooter: React.FC<ActionFooter> = (props) => {
  return (
    <ActionFooterContainer>
      <MainContent>
        <div>
          <Text>{props.message}</Text>
        </div>
        {props.button1}
        {props.button2}
      </MainContent>
    </ActionFooterContainer>
  );
};
