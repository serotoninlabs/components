import React from "react";
import styled from "styled-components";
import { BaseInput, BaseInputProps, InputContainer } from "./Base";
import { InputLabel } from "./Base";
import { HelperText } from "./HelperText";
import { InputError } from "./InputError";

export const StyledTextArea = styled.textarea`
  font-size: inherit;
  padding: 8px;
  appearance: none;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  border: ${(props) => props.theme.colors.inputs.border};
  border-radius: ${(props) => props.theme.colors.inputs.borderRadius};
  background-color: ${(props) => props.theme.colors.inputs.background};
  outline: none;
  resize: none;
`;

export type FullTextInputProps = BaseInputProps & {
  rows?: number;
  cols?: number;
  maxLength?: number;
};
export const FullTextInput: React.FunctionComponent<FullTextInputProps> = (
  props
) => {
  const { children, label, inputRef, name } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledTextArea
        name={name}
        ref={inputRef}
        cols={props.cols}
        rows={props.rows}
        autoComplete="off"
        maxLength={props.maxLength}
      >
        {children}
      </StyledTextArea>
      {props.helperText && !props.error ? (
        <HelperText helperText={props.helperText} />
      ) : (
        <span> </span>
      )}
      {props.error ? <InputError error={props.error} /> : undefined}
    </InputContainer>
  );
};
