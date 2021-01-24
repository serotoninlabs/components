import { Meta, Story } from "@storybook/react";
import { TextInput } from "./TextInput";
export default {
  title: "Components/Inputs",
  component: TextInput,
} as Meta;

export const Text = (args) => {
  return <TextInput {...args} />;
};
Text.args = {
  label: "Input Label",
  placeholder: "Input Placeholder",
};
