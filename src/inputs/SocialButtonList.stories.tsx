import { Meta, Story } from "@storybook/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SocialButtonList } from "./SocialButtonList";
export default {
  title: "Components/Inputs",
  component: SocialButtonList,
} as Meta;

export const Social = (props) => {
  const { register, watch } = useForm();
  return (
    <div>
      <SocialButtonList name="social" inputRef={register} />
      <div>values: {JSON.stringify(watch("social"))}</div>
    </div>
  );
};
