import { Meta } from "@storybook/react/types-6-0";
import { TruncatedEthAddress } from "./TruncatedEthAddress";

export default { title: "Atoms/Eth Address" } as Meta;

export const truncatedEthAddress = () => (
  <TruncatedEthAddress address="0xabc123" />
);
