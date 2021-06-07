import React from "react";
import styled from "styled-components";

import { BaseInputProps, InputContainer, InputLabel } from "./Base";

// https://moderncss.dev/custom-select-styles-with-pure-css/

const SelectContainer = styled.div`
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: ${(props) => props.theme.colors.inputs.primary.border};
  border-radius: 6px;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  &:after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #777;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    display: grid;
    grid-area: select;
    justify-self: end;
  }

  > select {
    grid-area: select;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;

    &:focus + span {
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border: 2px solid #333;
      border-radius: inherit;
    }
  }
`;

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: OptionProps[] } & BaseInputProps;

export const Select: React.FC<SelectProps> = (props) => {
  const { options, label, inputRef } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <SelectContainer>
        <select name={props.name} ref={inputRef}>
          <option />
          {options.map((o) => (
            <Option key={o.value} value={o.value} label={o.label} />
          ))}
        </select>
        <span></span>
      </SelectContainer>
    </InputContainer>
  );
};

type OptionProps = {
  label: React.ReactNode;
  value: string | number;
};
export const Option: React.FC<OptionProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};
