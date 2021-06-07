import React, { useMemo } from "react";
import styled from "styled-components";
//@ts-ignore
import blockies from "ethereum-blockies";

const Blockie = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  border-radius: 50%;

  && {
    border-radius: 50%;
  }
`;

export const BlockieIcon: React.FC<{ address: string }> = ({ address }) => {
  const blockieIcon = useMemo(() => {
    let icon = null;
    if (typeof document !== "undefined") {
      icon = blockies
        .create({
          // All options are optional
          seed: address, // seed used to generate icon data, default: random
          //color: "#eebc0f", // to manually specify the icon color, default: random
          //bgcolor: "#18e2ac", // choose a different background color, default: random
          size: 15, // width/height of the icon in blocks, default: 8
          scale: 3, // width/height of each block in pixels, default: 4
          //spotcolor: "#eebc0f", // each pixel has a 13% chance of being of a third color,
          // default: random. Set to -1 to disable it. These "spots" create structures
          // that look like eyes, mouths and noses.
        })
        .toDataURL();
      return icon;
    }
  }, [address]);

  return <Blockie src={blockieIcon} />;
};
