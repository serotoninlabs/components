import React from "react";
import { ButtonGroup, ButtonProps } from "../buttons/Button";
import { Button } from "../buttons/Button";

import * as Social from "../icons/SocialIcons";
import { RowContainer } from "../containers";
import { IconButton } from "../buttons/IconButton";

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

export const SocialButtonList = () => {
  return (
    <ButtonGroup>
      <FacebookIconButton />
      <GithubIconButton />
      <InstagramIconButton />
      <TiktokIconButton />
      <WebsiteIconButton />
    </ButtonGroup>
  );
};
