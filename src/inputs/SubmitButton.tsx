import React from "react";
import { Button, ButtonProps } from "../buttons/Button";

export type SubmitButtonProps = {
  label: string;
  fireEvent?: string | { name: string; data: any };
} & ButtonProps;

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  fireEvent,
  size,
  ...props
}) => <Button as="input" type="submit" value={label} {...props} />;
