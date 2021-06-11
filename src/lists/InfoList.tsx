import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: auto 1em;
`;

const ListWrapper = styled.div<{width?: string}>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "100%"};
  margin: auto;
`;

const InfoSection: React.FC<{img: string; title: string; text: string;}> = ({img, title, text}) => {
  return (
    <StyledSection>
      {img.length > 0 && <img src={img}/>}
      {title.length > 0 && <h2>{title}</h2>}
      {text.length > 0 && <p>{text}</p>}
    </StyledSection>
  )
}

interface ConnectInfoProps {
  infoList: Array<{
    img?: string;
    title?: string;
    text?: string;
  }>;
  width?: string;
}


export const InfoList: React.FC<ConnectInfoProps> = ({infoList, width}) => {
  return (
    <ListWrapper width={width}>
      {
        infoList.map((info, idx) => (
          <InfoSection 
            key={idx} 
            img={info.img || ""} 
            title={info.title || ""} 
            text={info.text || ""} 
          />
        ))}
    </ListWrapper>
  )
}