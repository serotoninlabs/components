import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { LoadingSpinner } from "./LoadingSpinner";

export default { title: "Atoms/Loading Spinner" } as Meta;

export const loadingSpinner = () => (
  <LoadingSpinner/>
);
