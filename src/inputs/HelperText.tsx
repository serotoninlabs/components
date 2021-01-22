import React from "react";
import { Text } from "../text";

export const HelperText: React.FC<{
  helperText: string | React.ReactElement;
}> = ({ helperText }) => {
  return (
    <div>
      <Text>{helperText}</Text>
    </div>
  );
};
