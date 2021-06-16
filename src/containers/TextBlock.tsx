import React from "react";
import styled from "styled-components";

const TextDiv = styled.div<{backgroundColor?: string; width?: string;}>`
  display: block;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.secondary.text};

  > div {
    width: ${(props) => props.width || "100%"};
    margin: auto;
  }
`;

interface PresentTextProps {
  title?: string;
  text?: Array<string>;
  backgroundColor?: string;
  width?: string;
}

export const TextBlock: React.FC<PresentTextProps> = ({title, text, backgroundColor, width, children}) => {
  return (
      <TextDiv backgroundColor={backgroundColor} width={width}>
        <div>
          {title && <h1>{title}</h1>}
          {text && text.map((t, idx) => {
            return <p key={idx}>{t}</p>
          })}
          {children}
        </div>
      </TextDiv>
  );
};
