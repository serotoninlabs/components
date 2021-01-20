import React from "react";
import { BaseInput, BaseInputProps, InputContainer } from "./Base";
import { InputLabel } from "./Base";
import { HelperText } from "./HelperText";
import { InputError } from "./InputError";

export type FullTextInputProps = BaseInputProps;
export const FullTextInput: React.FunctionComponent<FullTextInputProps> = (
  props
) => {
  const { children, label, inputRef, name } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <BaseInput as="textarea" name={name} ref={inputRef} autoComplete="off">
        {children}
      </BaseInput>
      {props.helperText && !props.error ? (
        <HelperText helperText={props.helperText} />
      ) : (
        <span> </span>
      )}
      {props.error ? <InputError error={props.error} /> : undefined}
    </InputContainer>
  );
};
