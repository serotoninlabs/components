import React from "react";
import styled from "styled-components";

const IconOuter = styled.div<{backgroundColor?: string;}>`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  background-color: ${(props) => props.backgroundColor || props.theme.backgroundColor};
  text-align: center;

  h1 {
    color: #000;
  }
`;


const Logos = styled.div<{width: string; flexDirection?: string;}>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || "row"};
  height: auto;
  width: 90%;
  margin: auto;

  > span {
    width: ${(props) => props.width};
    margin: auto 5px;
    ${(props) => props.flexDirection === "column" && "margin: 1em auto"};
    
    img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;

interface IconProps {
  title?: string;
  text?: string;
  iconImg: Array<string>;
  backgroundColor?: string;
  flexDirection?: string;
  autoWidth?: boolean;
}

const Icon: React.FC<{src: string;}> = ({src}) => {
  return (
    <span>
      <img src={src}/>
    </span>
  )
}

export const IconsList: React.FC<IconProps> = ({ title, text, iconImg, backgroundColor, flexDirection, autoWidth }) => {
  const width = (100 / iconImg.length).toString() + "%";
  return (
    <IconOuter backgroundColor={backgroundColor}>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      <Logos width={autoWidth ? "auto" : width} flexDirection={flexDirection}>
        {iconImg.map((b, idx) => {
          return <Icon src={b} key={idx} />
        })}
      </Logos>
    </IconOuter>
  );
}
