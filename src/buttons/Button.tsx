import React from "react";
import styled from "styled-components";
import { useAppAnalytics } from "../analytics/AppAnalyticsProvider";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  href?: string;
  fireEvent?: string | { name: string; data: any };
  onClick?(): void;
};

export const Base: React.FC<ButtonProps> = (props) => {
  const { analytics } = useAppAnalytics();
  const { fireEvent, ...buttonProps } = props;

  const component = (
    <button className={props.className} {...buttonProps} onClick={onClick}>
      {props.children}
    </button>
  );

  function onClick() {
    props.onClick && props.onClick();
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
  display: inline-block;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary.gradient[0]} 0%,
    ${(props) => props.theme.colors.secondary.gradient[1]} 51%,
    ${(props) => props.theme.colors.secondary.gradient[2]} 100%
  );

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
