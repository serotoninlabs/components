import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineGlobal,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { IoLogoTiktok, IoLogoTwitch } from "react-icons/io5";
import { FaPodcast } from "react-icons/fa";

export { AiOutlineFacebook as FacebookIcon };
export { AiOutlineGithub as GithubIcon };
export { AiOutlineInstagram as InstagramIcon };
export { AiOutlineGlobal as WebsiteIcon };
export { AiOutlineTwitter as TwitterIcon };
export { AiOutlineYoutube as YoutubeIcon };
export { IoLogoTiktok as TiktokIcon };
export { IoLogoTwitch as TwitchIcon };
export { FaPodcast as PodcastIcon };

export type Providers =
  | "facebook"
  | "github"
  | "instagram"
  | "podcast"
  | "tiktok"
  | "twitch"
  | "twitter"
  | "website"
  | "youtube";
export const SocialIcon: React.FC<{ icon: Providers }> = ({ icon }) => {
  switch (icon) {
    case "facebook":
      return <AiOutlineFacebook />;
    case "github":
      return <AiOutlineGithub />;
    case "instagram":
      return <AiOutlineInstagram />;
    case "podcast":
      return <FaPodcast />;
    case "tiktok":
      return <IoLogoTiktok />;
    case "twitch":
      return <IoLogoTwitch />;
    case "twitter":
      return <AiOutlineTwitter />;
    case "website":
      return <AiOutlineGlobal />;
    case "youtube":
      return <AiOutlineYoutube />;
    default:
      throw new Error("unrecognized type");
  }
};
