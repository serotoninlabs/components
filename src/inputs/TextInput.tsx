import React from "react";
import { BaseInput, BaseInputProps, InputContainer } from "./Base";
import { InputLabel } from "./Base";
import { HelperText } from "./HelperText";
import { InputError } from "./InputError";

export type TextInputProps = BaseInputProps;
export const TextInput: React.FunctionComponent<TextInputProps> = (props) => {
  const {
    children,
    label,
    inputRef,
    name,
    placeholder,
    className,
    disabled,
  } = props;

  return (
    <InputContainer className={className}>
      <InputLabel>{label}</InputLabel>
      <BaseInput
        name={name}
        ref={inputRef}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
      >
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
