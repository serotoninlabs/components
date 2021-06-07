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
  className?: string;
  disabled?: boolean;
};

export const BaseInput = styled.input`
  font-size: inherit;
  padding: 8px;
  appearance: none;
  border: ${(props) => props.theme.colors.inputs.primary.border};
  border-radius: ${(props) => props.theme.colors.inputs.primary.borderRadius};
  background-color: ${(props) => props.theme.colors.inputs.primary.background};
  color: ${(props) => props.theme.colors.inputs.primary.textColor};

  &::placeholder {
    color: ${(props) => props.theme.colors.inputs.primary.placeholderColor};
  }
`;

export const SecondaryInput = styled.input`
  font-size: inherit;
  padding: 8px;
  appearance: none;
  border: ${(props) => props.theme.colors.inputs.secondary.border};
  border-radius: ${(props) => props.theme.colors.inputs.secondary.borderRadius};
  background-color: ${(props) => props.theme.colors.inputs.secondary.background};
  color: ${(props) => props.theme.colors.inputs.secondary.textColor};

  &::placeholder {
    color: ${(props) => props.theme.colors.inputs.secondary.placeholderColor};
  }
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.colors.inputs.primary.label};
  margin-bottom: 11px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
`;
