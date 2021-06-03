import { Meta } from "@storybook/react";
import {TextBlock} from "./TextBlock";

export default {
  title: "Components/Containers/Text Block",
  component: TextBlock,
} as Meta;

const text = [
  "Exotic vehicles are known to create envy. To own one would come at a premium price out of the range of the average car buyer. With the fourth mix of Hot Wheels Car Culture for 2021, Exotic Envy, we’re giving you the chance to own not one, but three amazing NFTs from the legendary collection.", 
  "Make sure to sign up below to receive news on when the bidding begins. True collectors would not want to miss out on this exciting opportunity."
]

export const textBlock = () => {
  return (
    <TextBlock title="The Hotwheels NFT collection" text={text}/>
  );
};
