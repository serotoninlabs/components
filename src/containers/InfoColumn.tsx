import React from "react";
import { PrimaryButton } from "../buttons";
import styled from "styled-components";
import { media } from "../utils/media";

const StyledEdition = styled(PrimaryButton)`
  pointer-events: none;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.09em;
`;

const StyledBidInfo = styled.div<{width?: string;}>`
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    height: 80%;
  }

  a {
    text-decoration: none;
  }

  > div:first-child {
    width: ${(props) => props.width || "auto"};
  }

  h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.09em;
  }
`;

const StyledInfoSection = styled.div<{color?: string;}>`
  p {
    color: ${(props) => props.color || props.theme.colors.common.white};
    margin: 0.5em auto;
  }

  .colored {
    color: ${(props) => props.theme.colors.primary.text};
    font-weight: 700;
  }

  .creation, .creator {
    display: inline-flex;
  }
`;

interface SectionProps {
  title?: string;
  text: string;
  creation?: string;
  creator?: string;
}

const InfoSection: React.FC<{section: SectionProps}> = ({ section }) => {
  const { title, text, creation, creator } = section;
  return (
    <StyledInfoSection>
      {title && <p className="colored">{title}</p>}
      {creation && <span className="creation"><p>BORN:{" "}</p><p> {creation}</p></span>}
      <p className="text">{text}</p>
      {creator && <span className="creator"><p>Designer:{" "}</p><p>{creator}</p></span>}
    </StyledInfoSection>
  );
};

interface BidInfoProps {
  bidInfo: Array<{
    title?: string;
    text: string;
    creation?: string;
    creator?: string;
  }>;
  title?: string;
  name?: string;
  width?: string; 
}

export const InfoColumn: React.FC<BidInfoProps> = ({ bidInfo, title, name, width }) => {
  return (
    <>
      <StyledBidInfo width={width}>
        <div>
          {name && <h1>{name}</h1>}
          {title && <h4>{title}</h4>}
          {bidInfo.map((section, idx) => (
            <InfoSection section={section} key={idx} />
          ))}
        </div>
      </StyledBidInfo>
    </>
  );
};

