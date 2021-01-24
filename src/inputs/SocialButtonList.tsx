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
      <RadioOption value="facebook">
        <Social.FacebookIcon />
      </RadioOption>
      <RadioOption value="github">
        <Social.GithubIcon />
      </RadioOption>
      <RadioOption value="instagram">
        <Social.InstagramIcon />
      </RadioOption>
      <RadioOption value="tiktok">
        <Social.TiktokIcon />
      </RadioOption>
      <RadioOption value="twitter">
        <Social.TwitterIcon />
      </RadioOption>
      <RadioOption value="twitch">
        <Social.TwitchIcon />
      </RadioOption>
      <RadioOption value="website">
        <Social.WebsiteIcon />
      </RadioOption>
      <RadioOption value="youtube">
        <Social.YoutubeIcon />
      </RadioOption>
    </StyledRadioInput>
  );
};
