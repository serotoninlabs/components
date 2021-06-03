import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img<{height: string;}>`
  height: ${(props) => props.height + "px"};
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

interface WrongNetworkProps {
  title?: string; 
  text?: string; 
  src?: string; 
  imgHeight?: number;
}

export const WrongNetwork: React.FC<WrongNetworkProps> = ({title, text, src, imgHeight}) => {
  return (
    <Wrapper>
      <h1>{title || "Oops, wrong network"}</h1>
      <p>
        {text || "Just open your connected wallet and change to the Main Ethereum Network"}
      </p>
      <div>
        <Image src={src || "/img/change_network.png"} height={imgHeight?.toString() || "300"} />
      </div>
    </Wrapper>
  );
};
