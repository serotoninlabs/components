import React from "react";
import { ButtonGroup, ButtonProps } from "./Button";
import { Button } from "./Button";

import * as Social from "../icons/SocialIcons";
import { RowContainer } from "../containers";

export type IconButtonProps = {
  icon: React.ReactElement;
} & ButtonProps;
export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return <Button {...props}>{icon}</Button>;
};

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
