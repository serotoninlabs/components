import React from "react";
import styled from "styled-components";
import { useAppAnalytics } from "../analytics/AppAnalyticsProvider";
import { ButtonStyleStates, IPalette } from "../themes";

export enum buttonSizes {
  SMALL = "SMALL",
  SMALL_WIDE = "SMALL_WIDE",
  MEDIUM = "MEDIUM",
  MEDIUM_WIDE = "MEDIUM_WIDE",
  LARGE = "LARGE",
  NEW_MEDIUM = "NEW_MEDIUM",
}

const paddingObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "8px 12px",
  [buttonSizes.SMALL_WIDE]: "8px 60px",
  [buttonSizes.MEDIUM]: "10px 25px",
  [buttonSizes.MEDIUM_WIDE]: "9px 30px",
  [buttonSizes.LARGE]: "20px 50px",
};

const spacingObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "0.5px",
  [buttonSizes.SMALL_WIDE]: "0.2px",
  [buttonSizes.MEDIUM]: "1px",
  [buttonSizes.MEDIUM_WIDE]: "0.2px",
  [buttonSizes.LARGE]: "3px",
};

const fontObject: { [index: string]: string } = {
  [buttonSizes.SMALL]: "12px",
  [buttonSizes.MEDIUM]: "16px",
  [buttonSizes.MEDIUM_WIDE]: "14px",
  [buttonSizes.LARGE]: "24px",
};

const lineHeight: { [index: string]: string } = {
  [buttonSizes.SMALL]: "12px",
  [buttonSizes.MEDIUM]: "16px",
  [buttonSizes.MEDIUM_WIDE]: "14px",
  [buttonSizes.LARGE]: "24px",
};

export const circleSize: { [index: string]: string } = {
  [buttonSizes.SMALL]: "22px",
  [buttonSizes.MEDIUM]: "40px",
  [buttonSizes.MEDIUM_WIDE]: "40px",
  [buttonSizes.LARGE]: "70px",
};

export type ButtonProps = {
  size?: buttonSizes;
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

  return (
    <button className={props.className} {...buttonProps} onClick={onClick}>
      {props.children}
    </button>
  );
};

export const Button = styled(Base)`
  appearance: none;
  border: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  cursor: pointer;
  outline: none;
  border-radius: 50px;
  text-decoration: none;
  color: inherit;
  font-size: 1em;

  padding: ${(props: any) => paddingObject[props.size || buttonSizes.MEDIUM]};
  letter-spacing: ${(props: any) =>
    spacingObject[props.size || buttonSizes.MEDIUM]};
  font-size: ${(props: any) => fontObject[props.size || buttonSizes.MEDIUM]};
  line-height: ${(props: any) => lineHeight[props.size || buttonSizes.MEDIUM]};
  min-width: 10ch;
  min-height: 34px;

  text-align: center;
  line-height: 1.1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 220ms all ease-in-out;
  :focus {
    outline: none;
  }

  box-sizing: border-box;
`;

function buttonCSS(button: ButtonStyleStates) {
  return `
  background-color: ${button.base.background};
  color: ${button.base.text};
  border: ${button.base.border};
  outline: none;
  :focus {
    color: ${button.focus.text};
    background-color: ${button.focus.background};
    border: ${button.focus.border};
  }
  &:hover {
    color: ${button.hover.text};
    background-color: ${button.hover.background};
    border: ${button.hover.border};
  }
  &:active {
    color: ${button.active.text};
    background-color: ${button.active.background};
    border: ${button.active.border};
  }
  &:disabled {
    color: ${button.disabled.text};
    background-color: ${button.disabled.background};
    border: ${button.disabled.border};
  }
  &[data-checked="true"] {
    color: ${button.active.text};
    background-color: ${button.active.background};
    border: ${button.active.border};
  }
  `;
}

export const PrimaryButton = styled(Button)`
  ${(props) => buttonCSS(props.theme.buttons.primary)}
`;
export const InvertedButton = styled(Button)`
  ${(props) => buttonCSS(props.theme.buttons.inverted)}
`;

export const SecondaryButton = styled(Button)`
  ${(props) => buttonCSS(props.theme.buttons.secondary)}
`;

export const CircleButton = styled(Button)`
  padding: 0;
  border-radius: 50%;
  width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  line-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
`;
export const CirclePrimaryButton = styled(PrimaryButton)`
  padding: 0;
  border-radius: 50%;
  width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  line-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
`;
export const CircleSecondaryButton = styled(SecondaryButton)`
  padding: 0;
  border-radius: 50%;
  width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-width: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  min-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
  line-height: ${(props) => circleSize[props.size || buttonSizes.MEDIUM]};
`;

export type ActionButtonprops = {
  icon: React.FC;
} & ButtonProps;

export const ActionButton: React.FC<ActionButtonprops> = ({
  icon: Icon,
  ...props
}) => (
  <CirclePrimaryButton {...props}>
    <Icon />
  </CirclePrimaryButton>
);

export const SecondaryActionButton: React.FC<ActionButtonprops> = ({
  icon: Icon,
  ...props
}) => (
  <CircleSecondaryButton {...props}>
    <Icon />
  </CircleSecondaryButton>
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
