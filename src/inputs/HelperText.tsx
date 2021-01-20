import React from "react";
import { Text } from "../text/text";

export const HelperText: React.FC<{
  helperText: string | React.ReactElement;
}> = ({ helperText }) => {
  return (
    <div>
      <Text>{helperText}</Text>
    </div>
  );
};
