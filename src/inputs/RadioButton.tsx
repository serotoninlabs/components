import React, { MouseEvent, useRef } from "react";
import styled from "styled-components";
import { InputLabel } from "./Base";
import { Button } from "../buttons/Button";

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

export interface RadioButtonProps {
  className?: string;
  inputRef?: any;
  onChange?: any;
  value: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: any;
}

export const RadioButtonDiv = styled.div`
  input {
    display: none;
  }
  input + button {
    background-image: none;
    background-color: lightblue;
  }
  input:checked + button {
    background-color: blue;
    border: 1px solid blue;
    color: white;
  }
`;
export const RadioButton: React.FunctionComponent<RadioButtonProps> = (
  props
) => {
  let input = useRef<any>(null);
  const { onChange, children, name, inputRef } = props;
  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();
    // input = ref;
    input.current.checked = true;

    if (onChange) {
      onChange(name, input.current.value);
    }
  };
  const defaultChecked = props.defaultValue === props.value;

  return (
    <RadioButtonDiv>
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
      <Button onClick={clickHandler} disabled={props.disabled}>
        {children}
      </Button>
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
    justify-content: center;
  }
`;
export const RadioInput = (props: RadioInputProps) => {
  const { defaultValue, onChange, label, name, inputRef, children } = props;

  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactChild) =>
      React.cloneElement(child as React.ReactElement, {
        name,
        onChange,
        defaultValue,
        inputRef,
      })
  );

  return (
    <RadioDiv>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <div>{childrenWithProps}</div>
    </RadioDiv>
  );
};
