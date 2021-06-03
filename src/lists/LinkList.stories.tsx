import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { LinkList } from "./LinkList";

export default { title: "Lists/Link List" } as Meta;

const links = [
  {
    name: "Terms of Use",
    link: "/terms"
  },
  {
    name: "Privacy Statement",
    link: "/privacy"
  },
  {
    name: "Cookies",
    link: "/cookies"
  },
]

export const linkList = () => (
  <LinkList 
    links={links}
    innerWidth="95%"
  />
);
