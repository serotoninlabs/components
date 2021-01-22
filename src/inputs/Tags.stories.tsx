import { useForm } from "react-hook-form";
import { Meta } from "@storybook/react";
import { Tags } from "./Tags";

export default {
  title: "Components/Inputs",
} as Meta;

export const TagInput = () => {
  const { watch, control, formState } = useForm({
    mode: "all",
    defaultValues: {
      tags: [{ name: "Utah" }, { name: "Florida" }],
    },
  });
  const suggestions = [
    { id: 1, name: "Alabama" },
    { id: 1, name: "Alaska" },
    { id: 1, name: "American Samoa" },
    { id: 1, name: "Arizona" },
    { id: 1, name: "Arkansas" },
    { id: 1, name: "California" },
    { id: 1, name: "Colorado" },
    { id: 1, name: "Connecticut" },
    { id: 1, name: "Delaware" },
    { id: 1, name: "District of Columbia" },
    { id: 1, name: "Federated States of Micronesia" },
    { id: 1, name: "Florida" },
    { id: 1, name: "Georgia" },
    { id: 1, name: "Guam" },
    { id: 1, name: "Hawaii" },
    { id: 1, name: "Idaho" },
    { id: 1, name: "Illinois" },
    { id: 1, name: "Indiana" },
    { id: 1, name: "Iowa" },
    { id: 1, name: "Kansas" },
    { id: 1, name: "Kentucky" },
    { id: 1, name: "Louisiana" },
    { id: 1, name: "Maine" },
    { id: 1, name: "Marshall Islands" },
    { id: 1, name: "Maryland" },
    { id: 1, name: "Massachusetts" },
    { id: 1, name: "Michigan" },
    { id: 1, name: "Minnesota" },
    { id: 1, name: "Mississippi" },
    { id: 1, name: "Missouri" },
    { id: 1, name: "Montana" },
    { id: 1, name: "Nebraska" },
    { id: 1, name: "Nevada" },
    { id: 1, name: "New Hampshire" },
    { id: 1, name: "New Jersey" },
    { id: 1, name: "New Mexico" },
    { id: 1, name: "New York" },
    { id: 1, name: "North Carolina" },
    { id: 1, name: "North Dakota" },
    { id: 1, name: "Northern Mariana Islands" },
    { id: 1, name: "Ohio" },
    { id: 1, name: "Oklahoma" },
    { id: 1, name: "Oregon" },
    { id: 1, name: "Palau" },
    { id: 1, name: "Pennsylvania" },
    { id: 1, name: "Puerto Rico" },
    { id: 1, name: "Rhode Island" },
    { id: 1, name: "South Carolina" },
    { id: 1, name: "South Dakota" },
    { id: 1, name: "Tennessee" },
    { id: 1, name: "Texas" },
    { id: 1, name: "Utah" },
    { id: 1, name: "Vermont" },
    { id: 1, name: "Virgin Island" },
    { id: 1, name: "Virginia" },
    { id: 1, name: "Washington" },
    { id: 1, name: "West Virginia" },
    { id: 1, name: "Wisconsin" },
    { id: 1, name: "Wyoming" },
  ];

  const tags = watch("tags");
  return (
    <form>
      <Tags name="tags" suggestions={suggestions} control={control} />
      <div>Selection: {tags && tags.map((t) => t.name).join(", ")}</div>
    </form>
  );
};
