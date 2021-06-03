import React from "react";
import { PrimaryButton } from "../buttons";
import styled from "styled-components";
import { media } from "../utils/media";

const StyledEdition = styled(PrimaryButton)`
  pointer-events: none;
`;

const StyledBidInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    height: 80%;
  }

  a {
    text-decoration: none;
  }

  > div:first-child {
    width: 80%;
  }
`;

const StyledInfoSection = styled.div<{color?: string;}>`
  p {
    color: ${(props) => props.color || props.theme.colors.common.white};
    margin: 0.5em auto;
  }

  p:first-child {
    color: ${(props) => props.theme.colors.primary.text};
  }
`;

interface SectionProps {
  title: string;
  text: string;
}

const InfoSection: React.FC<{section: SectionProps}> = ({ section }) => {
  return (
    <StyledInfoSection>
      <p>{section.title}</p>
      <p>{section.text}</p>
    </StyledInfoSection>
  );
};

interface BidInfoProps {
  bidInfo: Array<{
    title: string;
    text: string;
  }>;
  title?: string;
}

export const InfoColumn: React.FC<BidInfoProps> = ({ bidInfo, title }) => {
  return (
    <>
      <StyledBidInfo>
        <div>
          {title && <StyledEdition>{title}</StyledEdition>}
          {bidInfo.map((section, idx) => (
            <InfoSection section={section} key={idx} />
          ))}
        </div>
      </StyledBidInfo>
    </>
  );
};

