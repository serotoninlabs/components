import { Meta } from "@storybook/react";
import {InfoColumn} from "./InfoColumn";

export default {
  title: "Components/Containers/Info Column",
  component: InfoColumn,
} as Meta;

const info = [
  {
    title: "Edition Details",
    text: `First die cast in TTTT and further details. tktktktktkt tk tktkktkt tktktk tktkt tktktkt tkt tk tkt tk tkjtktkt tkt tk tkt tk tk ttk`,
  },
  {
    title: "Starting Bid",
    text: "2 ETH",
  },
  {
    title: "TK",
    text: "TK"
  }
];

export const infoColumn = () => {
  return (
    <InfoColumn title="Edition of 1" bidInfo={info}/>
  );
};
