import React from "react";
import styled from "styled-components";
import { ButtonGroup, ButtonProps } from "../buttons/Button";
import { Button } from "../buttons/Button";

import * as Social from "../icons/SocialIcons";
import { RowContainer } from "../containers";
import { IconButton } from "../buttons/IconButton";
import { RadioInput, RadioOption } from "./RadioButton";

export const FacebookIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.FacebookIcon />} {...props} />;
};
export const GithubIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.GithubIcon />} {...props} />;
};
export const InstagramIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.InstagramIcon />} {...props} />;
};
export const TiktokIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.TiktokIcon />} {...props} />;
};
export const TwitterIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.TwitterIcon />} {...props} />;
};
export const WebsiteIconButton: React.FC<ButtonProps> = (props) => {
  return <IconButton icon={<Social.WebsiteIcon />} {...props} />;
};

export const StyledRadioInput = styled(RadioInput)`
  font-size: 20px;
  > div > div > label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 3px;
    padding: 6px;
    border-radius: 11px;
    background-color: #eaeaea;
    color: #a4a4a4;
  }
  > div > div > input:checked + label {
    color: #fea8a7;
    background-color: #f6e6e7;
  }
`;

export const options: Array<{ value: Social.Providers; icon: React.FC }> = [
  { value: "facebook", icon: Social.FacebookIcon },
  { value: "email", icon: Social.EmailIcon },
  { value: "instagram", icon: Social.InstagramIcon },
  { value: "podcast", icon: Social.PodcastIcon },
  { value: "tiktok", icon: Social.TiktokIcon },
  { value: "twitter", icon: Social.TwitterIcon },
  { value: "twitch", icon: Social.TwitchIcon },
  { value: "website", icon: Social.WebsiteIcon },
  { value: "youtube", icon: Social.YoutubeIcon },
];

export function buildDefaultValues(choices: Social.Providers[]) {
  return options.map((o) => (choices.indexOf(o.value) > -1 ? o.value : false));
}

export interface SocialButtonListProps {
  name: string;
  inputRef?: any;
}
export const SocialButtonList: React.FC<SocialButtonListProps> = ({
  name,
  inputRef,
}) => {
  return (
    <StyledRadioInput name={name} inputRef={inputRef}>
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <RadioOption key={option.value} value={option.value}>
            <Icon />
          </RadioOption>
        );
      })}
    </StyledRadioInput>
  );
};
