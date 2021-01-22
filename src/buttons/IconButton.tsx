import React from "react";
import { CircleButton, ButtonProps } from "./Button";

export type IconButtonProps = {
  icon: React.ReactElement;
} & ButtonProps;
export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <CircleButton {...props}>
      {icon}
      {props.children}
    </CircleButton>
  );
};
