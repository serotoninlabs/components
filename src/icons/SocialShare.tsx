import React from "react";
import styled from "styled-components";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";

const SocialCont = styled.div<{ fillColor?: string }>`
  width: 100%;
  display: block;
  h4 {
    margin-bottom: 0.5em;
  }
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0.5em;
    list-style-type: none;

    circle {
      display: none;
    }

    svg {
      fill: ${(props) => props.fillColor || props.theme.colors.primary.text};
    }
  }
`;

interface SocialProps {
  title?: string;
  socials: Array<string>;
  msg: string;
  fillColor?: string;
}

const SocialIconRow: React.FC<{ social: string; msg: string }> = ({
  social,
  msg,
}) => {
  switch (social) {
    case "twitter":
      return (
        <TwitterShareButton url={msg}>
          <TwitterIcon />
        </TwitterShareButton>
      );
    case "facebook":
      return (
        <FacebookShareButton url={msg}>
          <FacebookIcon />
        </FacebookShareButton>
      );
    case "whatsapp":
      return (
        <WhatsappShareButton url={msg}>
          <WhatsAppIcon />
        </WhatsappShareButton>
      );
    case "email":
      return (
        <EmailShareButton url={msg}>
          <MailOutlineIcon />
        </EmailShareButton>
      );
    case "telegram":
      return (
        <TelegramShareButton url={msg}>
          <TelegramIcon />
        </TelegramShareButton>
      );
    default:
      throw new Error("Unrecognized social");
  }
};

export const SocialShare: React.FC<SocialProps> = ({
  title,
  socials,
  msg,
  fillColor,
}) => {
  return (
    <SocialCont fillColor={fillColor}>
      {title && <h4>{title}</h4>}
      <ul>
        {socials.map((row, idx) => {
          return (
            <li key={idx}>
              <SocialIconRow social={row} msg={msg} />
            </li>
          );
        })}
      </ul>
    </SocialCont>
  );
};
