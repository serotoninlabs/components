import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Modal",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const SimpleButton = Template.bind({});
const s1: ButtonProps = {
  onClick(e) {
    console.log({ e });
  },
};
SimpleButton.args = s1;
