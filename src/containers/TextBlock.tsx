import React from "react";
import styled from "styled-components";

const TextDiv = styled.div<{backgroundColor?: string;}>`
  display: block;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.secondary.text};
`;

interface PresentTextProps {
  title?: string;
  text: Array<string>;
  backgroundColor?: string;
}

export const TextBlock: React.FC<PresentTextProps> = ({title, text, backgroundColor}) => {
  return (
      <TextDiv backgroundColor={backgroundColor}>
        {title && <h1>{title}</h1>}
        {text.map((t, idx) => {
          return <p key={idx}>{t}</p>
        })}
      </TextDiv>
  );
};
