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
`;

interface SectionProps {
  title?: string;
  text: string;
}

const InfoSection: React.FC<{section: SectionProps}> = ({ section }) => {
  const { title, text } = section;
  return (
    <StyledInfoSection>
      {title && <p className="colored">{title}</p>}
      <p className="text">{text}</p>
    </StyledInfoSection>
  );
};

interface BidInfoProps {
  bidInfo: Array<{
    title?: string;
    text: string;
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
          {title && <StyledEdition>{title}</StyledEdition>}
          {name && <h1>{name}</h1>}
          {bidInfo.map((section, idx) => (
            <InfoSection section={section} key={idx} />
          ))}
        </div>
      </StyledBidInfo>
    </>
  );
};

