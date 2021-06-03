import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { SocialShare } from "./SocialShare";

export default { title: "Atoms/Social Share" } as Meta;

const defaultMsg = `Check out this NFT collection of images from Kurt Cobain's iconic last photoshoot. May 3-7, 2021 at https://nft.jessefrohman.com/tokens/12`;
const socialList = ["twitter", "facebook", "email", "whatsapp"];

export const socialShare = () => (
  <SocialShare
    socials={socialList}
    msg={defaultMsg}
  />
);
