import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { media } from "../utils/media";

interface ModalProps {
  onCloseClicked(): void;
  closeColor?: string;
  backgroundColor?: string;
}

const ModalOuter = styled.div`
  height: 100%;
  width: 100%;
  overflow: none;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const StyledCloseModal = styled.div<{closeColor?: string;}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: right;
  z-index: 105;

  svg {
    margin: 10px;
    cursor: pointer;
    fill: ${(props) => props.closeColor || props.theme.colors.secondary.text};
  }
`;

const ModalInner = styled.div<{backgroundColor?: string;}>`
  display: block;
  width: 70%;
  height: 90%;
  margin: 2.5% auto;
  position: relative;
  background-color: ${(props) => props.backgroundColor || props.theme.backgroundColor};
  filter: brightness(1);
  padding-bottom: 1em;
  overflow-y: auto;
  box-shadow: 0, 3px, 12px rgba(0, 0, 0, 0.8);
  animation: show 0.2s;
  transform: scale(1);

  ${media.mobile} {
    width: 95%;
    margin: 5% auto;
  }

  @keyframes show {
    from {
      transform: scale(0);
      opacity: 0;
      z-index: -1;
    }
    to {
      transform: scale(1);
      opacity: 1;
      z-index: 2;
    }
  }

  h1 {
    margin-top: 0.5em;
  }
`;

export const AnimatedModal: React.FC<ModalProps> = ({ onCloseClicked, closeColor, backgroundColor, children }) => {
  return (
    <>
      <ModalOuter>
        <ModalInner backgroundColor={backgroundColor}>
          <StyledCloseModal closeColor={closeColor}>
            <CloseIcon onClick={onCloseClicked} />
          </StyledCloseModal>
          {children}
        </ModalInner>
      </ModalOuter>
    </>
  );
};
