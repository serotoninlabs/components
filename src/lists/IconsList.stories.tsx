import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { IconsList } from "./IconsList";

export default { title: "Lists/Icons List" } as Meta;

const pics = ["https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg", "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"]

export const iconsList = () => (
  <IconsList 
    iconImg={pics}
    title="OUR BRANDS" 
  />
);
