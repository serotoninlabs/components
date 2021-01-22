import { Meta, Story } from "@storybook/react";
import * as Social from "./SocialIcons";

export default {
  title: "Components/Icons",
} as Meta;

export const SocialIcons = () => {
  return (
    <div>
      <div>
        <Social.FacebookIcon /> Facebook
      </div>
      <div>
        <Social.GithubIcon /> Github
      </div>
      <div>
        <Social.InstagramIcon /> Instagram
      </div>
      <div>
        <Social.TiktokIcon /> Tiktok
      </div>
      <div>
        <Social.TwitterIcon /> Twitter
      </div>
    </div>
  );
};
