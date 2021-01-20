import React from "react";
import { BaseInput, BaseInputProps, InputContainer } from "./Base";
import { InputLabel } from "./Base";
import { InputError } from "./InputError";

export type NumericInput = BaseInputProps;
export const NumericInput: React.FunctionComponent<NumericInput> = (props) => {
  const { children, label, inputRef, name } = props;

  return (
    <InputContainer
      css={`
        max-width: 200px;
      `}
    >
      <InputLabel>{label}</InputLabel>
      <BaseInput
        name={name}
        type="number"
        ref={inputRef}
        autoComplete="off"
        step="0.01"
      >
        {children}
      </BaseInput>
      {props.error ? <InputError error={props.error} /> : undefined}
    </InputContainer>
  );
};
