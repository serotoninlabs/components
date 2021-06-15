import React from "react";
import styled from "styled-components";
import { media } from "../utils/media";

const LinkOuter = styled.div<{backgroundColor?: string;}>`
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


const LinksWrapper = styled.div<{width?: string; flexDirection?: string;}>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || "row"};
  height: auto;
  margin: auto;
  width: ${(props) => props.width || "100%"};

  > p, a {
    margin: 0;
    ${(props) => props.flexDirection === "column" && "margin: 1em auto"};
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    white-space: nowrap;
  }

  ${media.mobile} {
    flex-direction: column;

    p, a {
      margin: 5px auto;
    }
  }
`;

interface LinkProps {
  name: string;
  link?: string;
}

interface ListProps {
  title?: string;
  links: Array<LinkProps>;
  backgroundColor?: string;
  flexDirection?: string;
  autoWidth?: boolean;
  innerWidth?: string;
}

export const LinkList: React.FC<ListProps> = ({ title, innerWidth, links, backgroundColor, flexDirection, autoWidth }) => {
  return (
    <LinkOuter backgroundColor={backgroundColor}>
      {title && <h1>{title}</h1>}
      <LinksWrapper flexDirection={flexDirection} width={innerWidth}>
        {links.map((link, idx) => {
          return (
              link.link ? <a key={idx} href={link.link} target="_blank">{link.name}</a>
                : <p key={idx}>{link.name}</p>
            )
        })}
      </LinksWrapper>
    </LinkOuter>
  );
}
