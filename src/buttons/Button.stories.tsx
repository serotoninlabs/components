import { Meta, Story } from "@storybook/react";
import * as Buttons from "./Button";
import { ForwardIcon } from "../icons/Actions";

export default {
  title: "Components/Buttons",
} as Meta;

export const BaseButton = () => {
  return <Buttons.Base>Base Button</Buttons.Base>;
};

export const Button = (args) => {
  return (
    <div>
      <Buttons.Button>{args.label}</Buttons.Button>
      <Buttons.PrimaryButton>{args.label}</Buttons.PrimaryButton>
      <Buttons.InvertedButton>{args.label}</Buttons.InvertedButton>
      <Buttons.ActionButton icon={<ForwardIcon />} />

      <Buttons.SecondaryButton>{args.label}</Buttons.SecondaryButton>
      <Buttons.SecondaryActionButton icon={<ForwardIcon />} />
    </div>
  );
};
Button.args = {
  label: "hello",
};
