import { Meta } from "@storybook/react";
import { BlockieIcon } from "./BlockieIcon";

export default {
  title: "Components/Blockie",
} as Meta;

export const blockieIcon = () => <BlockieIcon address="0xabc123" />;
