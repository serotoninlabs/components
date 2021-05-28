import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { WrongNetwork } from "./WrongNetwork";

export default { title: "Components/Wrong Network" } as Meta;

export const wrongNetwork = () => (
  <WrongNetwork
    title="Oops, wrong network"
    text="Just open your connected wallet and change to the Main Ethereum Network"
    src="https://nft.jessefrohman.com/img/utils/change_network.png"
  />
);
