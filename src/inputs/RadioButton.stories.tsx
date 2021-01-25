import { Meta, Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { RadioButton, RadioInput as RadioInputComponent } from "./RadioButton";
import { PrimaryButton } from "../buttons/Button";
export default {
  title: "Components/Inputs",
  component: RadioInputComponent,
} as Meta;

export const RadioInput = (props) => {
  const { register, watch } = useForm({ mode: "all" });
  return (
    <div>
      <RadioInputComponent name="food" inputRef={register}>
        <RadioButton value="beef">Beef</RadioButton>
        <RadioButton value="pork">Pork</RadioButton>
      </RadioInputComponent>
      <div>value: {JSON.stringify(watch("food"))}</div>
    </div>
  );
};
