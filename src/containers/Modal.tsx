import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Button } from "../buttons";
import { media } from "../utils/media";

const colors = {
  light: "255, 255, 255",
  dark: "0, 0, 0",
  caution: "255, 0, 0",
};

export interface ModalOuterProps {
  visible: boolean;
  alpha?: number;
  color?: keyof typeof colors;
}
export const ModalContainer = styled.div<ModalOuterProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    `rgba(${colors[props.color || "dark"]}, ${props.alpha || 0.7})`};
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export interface ModalInnerProps {
  width?: string;
  padding?: string;
  fullScreen?: boolean;
}
export const ModalInner = styled.div<ModalInnerProps>`
  box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.4);
  max-width: ${(props) => props.width || 400}px;
  padding: ${(props) => props.padding || "35px 35px 50px 35px"};
  border-radius: ${(props) => props.theme.borderRadius};
  background: #fff;
  ${(props) => {
    if (props.fullScreen) {
      return "max-width: 100%; width: 100%; height: 100%; overflow: auto;";
    }
    return "";
  }}
  ${media.mobile} {
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export interface ModalProps extends ModalInnerProps, ModalOuterProps {
  visible: boolean;
  onOuterClicked?(): void;
}
export const Modal: React.FC<ModalProps> = (props) => {
  const el = useMemo(() => {
    if (typeof document !== "undefined") {
      return document.createElement("div");
    }
  }, []);
  useEffect(() => {
    if (el) {
      const bodyEl = document.getElementsByTagName("body");
      bodyEl[0]!.appendChild(el);
    }
  }, []);

  const {
    visible,
    color,
    alpha,
    onOuterClicked,
    children,
    ...innerProps
  } = props;

  const content = (
    <ModalContainer
      visible={visible}
      color={color}
      alpha={alpha}
      id="modal"
      onClick={() => {
        if (onOuterClicked) {
          onOuterClicked();
        }
      }}
    >
      <ModalInner
        {...innerProps}
        onClick={(ev: any) => {
          ev.stopPropagation();
        }}
      >
        {children}
      </ModalInner>
    </ModalContainer>
  );

  if (!el) {
    return <></>;
  }

  return ReactDOM.createPortal(content, el);
};

export interface ActionModalprops extends ModalProps {
  onAccept(): void;
  onReject(): void;
}

export const ActionModal: React.FC<ActionModalprops> = (props) => {
  const { children, ...modalprops } = props;
  return (
    <Modal {...modalprops}>
      <div>{children}</div>
      <div>
        <Button onClick={props.onAccept}>Accept</Button>
        <Button onClick={props.onReject}>Reject</Button>
      </div>
    </Modal>
  );
};
