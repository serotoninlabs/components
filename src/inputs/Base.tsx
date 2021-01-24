import styled from "styled-components";

export type FieldError = {
  message?: string;
};

export type BaseInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string | React.ReactElement;
  error?: FieldError;
  inputRef?: any;
};

export const BaseInput = styled.input`
  font-size: inherit;
  padding: 8px;
  appearance: none;
  border: ${(props) => props.theme.colors.inputs.border};
  border-radius: ${(props) => props.theme.colors.inputs.borderRadius};
  background-color: ${(props) => props.theme.colors.inputs.background};
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.colors.inputs.label};
  margin-bottom: 11px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
`;
