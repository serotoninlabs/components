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
  inputRef: any;
};

export const BaseInput = styled.input`
  font-size: inherit;
  padding: 5px;
  appearance: none;
  border: ${(props) => props.theme.colors.inputs.border};
  background-color: ${(props) => props.theme.colors.inputs.background};
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.colors.inputs.label};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > label {
  }
`;
