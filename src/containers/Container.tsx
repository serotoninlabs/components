import React from "react";
import styled from "styled-components";
import { ActionButton, ButtonProps } from "../buttons";
import { ForwardIcon } from "../icons";
import { media } from "../utils/media";
import { Row } from "./layout";
export type ContainerSize = "full" | "small" | "medium" | "large";

const containerSizes = {
  mobile: {
    small: "400px",
    medium: "400px",
    large: "400px",
    full: "100%",
  },
  tablet: {
    small: "300px",
    medium: "300px",
    large: "400px",
    full: "100%",
  },
  desktop: {
    small: "395px",
    medium: "400px",
    large: "800px",
    full: "100%",
  },
  fullhd: {
    small: "395px",
    medium: "400px",
    large: "800px",
    full: "100%",
  },
};

const fontSizes = {
  small: "1rem",
  medium: "1.2rem",
  large: "1.5rem",
  full: "2rem",
};

export type ContainerProps = { size?: ContainerSize };
export const Container = styled.div<ContainerProps>`
  ${media.mobile} {
    min-width: ${(props) => containerSizes.mobile[props.size || "full"]};
    width: ${(props) => containerSizes.mobile[props.size || "full"]};
  }
  ${media.tablet} {
    min-width: ${(props) => containerSizes.tablet[props.size || "full"]};
    width: ${(props) => containerSizes.tablet[props.size || "full"]};
  }
  ${media.laptop} {
    min-width: ${(props) => containerSizes.fullhd[props.size || "full"]};
    width: ${(props) => containerSizes.fullhd[props.size || "full"]};
  }
  ${media.desktop} {
    min-width: ${(props) => containerSizes.desktop[props.size || "full"]};
    width: ${(props) => containerSizes.desktop[props.size || "full"]};
  }
`;

export const HighlightContainer = styled(Container)`
  padding: 30px;
  border: ${(props) => props.theme.containers.highlight.border};
  border-radius: ${(props) => props.theme.containers.highlight.borderRadius};
  background-color: ${(props) => props.theme.containers.highlight.main};
  color: ${(props) => props.theme.containers.highlight.subheading};
  > h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.containers.highlight.heading};
  }
`;

export const Card = styled(Container)`
  margin: 10px;
  padding: 24px;
  border: ${(props) => props.theme.containers.card.border};
  border-radius: ${(props) => props.theme.containers.card.borderRadius};
  background-color: ${(props) => props.theme.containers.card.main};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  color: ${(props) => props.theme.containers.card.text};
  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme.containers.card.heading};
  }
`;

export const ActionCard: React.FC<ContainerProps & ButtonProps> = ({
  size,
  children,
  onClick,
}) => {
  return (
    <Card size={size}>
      <Row
        css={`
          > div:first-child {
            flex-grow: 1;
            flex-wrap: 1;
          }
        `}
      >
        <div>{children}</div>
        <ActionButton icon={ForwardIcon} onClick={onClick} />
      </Row>
    </Card>
  );
};

const StyledListCard = styled(Card)`
  padding: 0px;
`;
export const ListCard: React.FC<ContainerProps & ButtonProps> = ({
  size,
  children,
}) => {
  return <StyledListCard>{children}</StyledListCard>;
};

export const ListCardItem = styled.div`
  border-bottom: ${(props) => props.theme.containers.card.border};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px; 24px;
  > div:first-child {
  }
  > div:nth-child(2) {
    flex-grow: 1;
  }
  > div:last-child {
    text-align: right;
  }
`;
export const ListCardElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;
