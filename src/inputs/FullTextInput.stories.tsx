import { Meta, Story } from "@storybook/react";
import { FullTextInput } from "./FullTextInput";
export default {
  title: "Components/Inputs",
  component: FullTextInput,
} as Meta;

export const FullText = (args) => {
  return <FullTextInput {...args} />;
};
FullText.args = {
  label: "Input Label",
  placeholder: "Input Placeholder",
  rows: 4,
  maxLength: 255,
};
