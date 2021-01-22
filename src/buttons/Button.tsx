import React from "react";
import chroma from "chroma-js";
import styled from "styled-components";
import { useAppAnalytics } from "../analytics/AppAnalyticsProvider";

export enum buttonSizes {
  SMALL = "SMALL",
  SMALL_WIDE = "SMALL_WIDE",
  MEDIUM = "MEDIUM",
  MEDIUM_WIDE = "MEDIUM_WIDE",
  LARGE = "LARGE",
  NEW_MEDIUM = "NEW_MEDIUM",
}

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  href?: string;
  fireEvent?: string | { name: string; data: any };
  onClick?(
    event: React.MouseEvent<
      HTMLInputElement | HTMLButtonElement | HTMLAnchorElement,
      MouseEvent
    >
  ): void;
};

export const Base: React.FC<ButtonProps> = (props) => {
  const { analytics } = useAppAnalytics();
  const { fireEvent, ...buttonProps } = props;

  const component = (
    <button className={props.className} {...buttonProps} onClick={onClick}>
      {props.children}
    </button>
  );

  function onClick(
    event: React.MouseEvent<
      HTMLInputElement | HTMLButtonElement | HTMLAnchorElement,
      MouseEvent
    >
  ) {
    props.onClick && props.onClick(event);
    if (typeof props.fireEvent === "string") {
      analytics.logEvent(props.fireEvent);
    } else if (props.fireEvent) {
      analytics.logEvent(props.fireEvent.name, props.fireEvent.data);
    }
  }

  if (props.href) {
    return (
      <a
        href={props.href}
        className={props.className}
        {...buttonProps}
        onClick={onClick}
      >
        {props.children}
      </a>
    );
  }

  return component;
};

export const Button = styled(Base)`
  border: none;
  background-color: transparent;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  border-radius: 50px;

  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 34px;

  text-align: center;
  line-height: 1.1;

  transition: 220ms all ease-in-out;
  :focus {
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.primary.main};
  color: ${(props) => props.theme.buttons.primary.text};
  :focus {
    outline: none;
    background-color: ${(props) =>
      chroma(props.theme.buttons.primary.main).desaturate(3).hex()};
  }
  &:active {
    background-color: ${(props) =>
      chroma(props.theme.buttons.primary.main).desaturate(3).hex()};
  }
`;
export const InvertedButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.primary.text};
  color: ${(props) => props.theme.buttons.primary.main};
  border: 1px solid ${(props) => props.theme.buttons.primary.main};
  :focus {
    outline: none;
    background-color: ${(props) =>
      chroma(props.theme.buttons.primary.text).desaturate(3).hex()};
  }
  &:active {
    background-color: ${(props) =>
      chroma(props.theme.buttons.primary.text).desaturate(3).hex()};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.secondary.main};
  color: ${(props) => props.theme.buttons.secondary.text};
  :focus {
    outline: none;
    background-color: ${(props) =>
      chroma(props.theme.buttons.secondary.main).desaturate(3).hex()};
  }
  &:active {
    background-color: ${(props) =>
      chroma(props.theme.buttons.secondary.main).desaturate(3).hex()};
  }
`;

export const CirclePrimaryButton = styled(PrimaryButton)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
export const CircleSecondaryButton = styled(PrimaryButton)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const ActionButton: React.FC<
  { icon: React.ReactElement } & ButtonProps
> = ({ icon, ...props }) => (
  <CirclePrimaryButton {...props}>{icon}</CirclePrimaryButton>
);
export const SecondaryActionButton: React.FC<
  { icon: React.ReactElement } & ButtonProps
> = ({ icon, ...props }) => (
  <CircleSecondaryButton {...props}>{icon}</CircleSecondaryButton>
);

export const OldPrimaryButton = styled(Button)`
  margin: 5px;
  font-family: ${(props) => props.theme.fonts.sansSerif}, sans-serif;
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 0 20px #eee;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  border: none;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 0, 0.23);
  }

  :disabled {
    background-image: none;
    background-color: #333;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  padding: 10px 20px;
  font-size: 1rem;
`;

export const ButtonGroup = styled.div`
  display: inline-block;
  > button {
    margin: 0;
  }
`;
