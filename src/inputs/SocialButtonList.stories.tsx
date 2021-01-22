import { Meta, Story } from "@storybook/react";
import { SocialButtonList } from "./SocialButtonList";
export default {
  title: "Components/Inputs",
  component: SocialButtonList,
} as Meta;

export const Social = (props) => {
  return <SocialButtonList {...props} />;
};
