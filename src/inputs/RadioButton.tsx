import React, { MouseEvent, useRef } from "react";
import styled from "styled-components";
import { InputLabel } from "./Base";
import { InvertedButton, ButtonProps } from "../buttons/Button";

export interface OvalImageProps {
  height?: number;
  width?: number;
}
export const OvalImage = styled.div`
  background-color: #f1f1f1;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props: OvalImageProps) =>
    props.width ? props.width + "px" : "60px"};
  height: ${(props: OvalImageProps) =>
    props.height ? props.height + "px" : "60px"};
  > svg {
    width: ${(props: OvalImageProps) =>
      props.width ? Math.round(props.width * 0.75).toString() + "px" : "40px"};
    height: ${(props: OvalImageProps) =>
      props.height
        ? Math.round(props.height * 0.75).toString() + "px"
        : "40px"};
  }
`;

export const RadioButtonDiv = styled.div`
  input {
    display: none;
  }
  label + input {
    color: red;
    background-color: blue;
  }
  ${InvertedButton} {
    margin: 0 5px;
  }
`;

export interface RadioButtonProps {
  className?: string;
  inputRef?: any;
  onChange?: any;
  value: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: any;
  idx?: number;
  as?: React.FC<ButtonProps>;
}
export const RadioButton: React.FunctionComponent<RadioButtonProps> = (
  props
) => {
  let input = useRef<any>(null);
  const { onChange, children, name, inputRef } = props;
  const clickHandler = (e: MouseEvent) => {
    input.current.click();
    input.current.checked = true;
    // input.current.onchange();
    if (onChange) {
      onChange(name, input.current.value);
    }
  };
  const defaultChecked = props.defaultValue === props.value;

  return (
    <RadioButtonDiv>
      <label>
        <input
          type="radio"
          value={props.value}
          defaultChecked={defaultChecked}
          name={name}
          ref={(ref) => {
            inputRef(ref);
            input.current = ref;
          }}
        />
        <InvertedButton
          onClick={clickHandler}
          disabled={props.disabled}
          data-checked={input.current?.checked}
        >
          {children}
        </InvertedButton>
      </label>
    </RadioButtonDiv>
  );
};

export const RadioBtnCircle = styled.div`
  background-color: white;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px grey;
  height: 18px;
  left: 2px;
  position: absolute;
  top: calc(50% - 9px);
  width: 18px;
`;

export const RadioBtn = styled.button`
  background-color: white;
  border: none;
  color: lightblue;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: -0.09px;
  line-height: 24px;
  margin-bottom: 10px;
  outline: none;
  padding-left: 30px;
  position: relative;
  text-align: left;
`;

export interface RadioInputProps {
  name: string;
  label?: string;
  defaultValue?: any;
  onChange?: any;
  inputRef?: any;
  className?: any;
  children?: any;
}

const RadioDiv = styled.div`
  > div {
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
  }
`;
export const RadioInput: React.FC<RadioInputProps> = (props) => {
  const {
    defaultValue,
    onChange,
    label,
    name,
    inputRef,
    children,
    className,
  } = props;

  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactChild, idx: number) =>
      React.cloneElement(child as React.ReactElement, {
        name,
        onChange,
        defaultValue,
        inputRef,
        idx,
      })
  );

  return (
    <RadioDiv className={className}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <div>{childrenWithProps}</div>
    </RadioDiv>
  );
};

export interface RadioOptionProps {
  className?: string;
  inputRef?: any;
  onChange?: any;
  value: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: any;
  idx?: number;
  as?: React.FC<ButtonProps>;
}
export const RadioOption: React.FunctionComponent<RadioOptionProps> = (
  props
) => {
  let input = useRef<any>(null);
  const { onChange, children, name, inputRef } = props;
  const defaultChecked = props.defaultValue === props.value;

  let Component: RadioButtonProps["as"] = InvertedButton;
  if (props.as) {
    Component = props.as;
  }

  return (
    <RadioButtonDiv>
      <input
        type="checkbox"
        value={props.value}
        defaultChecked={defaultChecked}
        name={`${name}.${props.idx}`}
        id={`${name}.${props.idx}`}
        ref={(ref) => {
          if (inputRef) {
            if (typeof inputRef === "function") {
              inputRef(ref);
            } else {
              // todo(dankins): idk if this actually works
              inputRef.current = ref;
            }
          }

          input.current = ref;
        }}
      />
      <label htmlFor={`${name}.${props.idx}`}>{children}</label>
    </RadioButtonDiv>
  );
};
