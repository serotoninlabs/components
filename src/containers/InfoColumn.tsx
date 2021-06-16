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
  display: flex;
  flex-direction: column;
  p {
    color: ${(props) => props.color || props.theme.colors.common.white};
    margin: 0.5em auto;
  }

  .colored {
    color: ${(props) => props.theme.colors.primary.text};
    font-weight: 700;
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
      {creation && <span className="creation"><p>BORN: {creation}</p></span>}
      {creator && <span className="creator"><p>DESIGNER: {creator}</p></span>}
      <p className="text">{text}</p>
    </StyledInfoSection>
  );
};

interface BidInfoProps {
  tierInfo: Array<{
    title?: string;
    text: string;
    creation?: string;
    creator?: string;
  }>;
  title?: string;
  name?: string;
  width?: string; 
}

export const InfoColumn: React.FC<BidInfoProps> = ({ tierInfo, title, name, width }) => {
  return (
    <>
      <StyledBidInfo width={width}>
        <div>
          {name && <h1>{name}</h1>}
          {title && <h4>{title}</h4>}
          {tierInfo.map((section, idx) => (
            <InfoSection section={section} key={idx} />
          ))}
        </div>
      </StyledBidInfo>
    </>
  );
};

