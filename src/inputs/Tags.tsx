import React from "react";
import styled from "styled-components";
import ReactTags, { Tag } from "react-tag-autocomplete";
import { useController, UseFormMethods } from "react-hook-form";
import { BaseInputProps, InputContainer, InputLabel } from "./Base";
import { InputError } from "./InputError";
import { HelperText } from "./HelperText";

export const TagsContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.sansSerif};
  .react-tags {
    position: relative;
    padding: 6px 0 0 6px;
    border: ${(props) => props.theme.colors.inputs.border};
    border-radius: ${(props) => props.theme.colors.inputs.borderRadius};

    /* shared font styles */
    font-size: 1em;
    line-height: 1.2;

    /* clicking anywhere will focus the input */
    cursor: text;
  }

  .react-tags.is-focused {
    border-color: #b1b1b1;
  }

  .react-tags__selected {
    display: inline;
  }

  .react-tags__selected-tag {
    display: inline-block;
    box-sizing: border-box;
    margin: 0 6px 6px 0;
    padding: 6px 8px;
    border: none;
    border-radius: 11px;
    background: #eaeaea;
    color: #a4a4a4;

    /* match the font styles */
    font-size: inherit;
    line-height: inherit;
  }

  .react-tags__selected-tag:after {
    content: "✕";
    color: #d4d4d4;
    margin-left: 8px;
  }

  .react-tags__selected-tag:hover,
  .react-tags__selected-tag:focus {
    border-color: #b1b1b1;
  }

  .react-tags__search {
    display: inline-block;

    /* match tag layout */
    padding: 7px 2px;
    margin-bottom: 6px;

    /* prevent autoresize overflowing the container */
    max-width: 100%;
  }

  @media screen and (min-width: 30em) {
    .react-tags__search {
      /* this will become the offsetParent for suggestions */
      position: relative;
    }
  }

  .react-tags__search-input {
    /* prevent autoresize overflowing the container */
    max-width: 100%;

    /* remove styles and layout from this element */
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;

    /* match the font styles */
    font-size: inherit;
    line-height: inherit;
  }

  .react-tags__search-input::-ms-clear {
    display: none;
  }

  .react-tags__suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 30em) {
    .react-tags__suggestions {
      width: 240px;
    }
  }

  .react-tags__suggestions ul {
    margin: 4px -1px;
    padding: 0;
    list-style: none;
    background: white;
    border: 1px solid #d1d1d1;
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .react-tags__suggestions li {
    border-bottom: 1px solid #ddd;
    padding: 6px 8px;
  }

  .react-tags__suggestions li mark {
    text-decoration: underline;
    background: none;
    font-weight: 600;
  }

  .react-tags__suggestions li:hover {
    cursor: pointer;
    background: #eee;
  }

  .react-tags__suggestions li.is-active {
    background: #b7cfe0;
  }

  .react-tags__suggestions li.is-disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

export { Tag };

export type TagsBaseProps = {
  onChange(tags: Tag[]): void;
  tags: Tag[];
  suggestions?: Tag[];
} & BaseInputProps;
export const TagsBase: React.FC<TagsBaseProps> = ({
  onChange,
  tags,
  suggestions,
  label,
  helperText,
  error,
}) => {
  function add(tag: Tag): void {
    onChange(tags.concat([tag]));
  }
  function deleteTag(idx: number): void {
    onChange([...tags.slice(0, idx), ...tags.slice(idx + 1)]);
  }

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TagsContainer>
        <ReactTags
          suggestions={suggestions}
          tags={tags}
          allowNew={true}
          onAddition={add}
          onDelete={deleteTag}
        />
      </TagsContainer>
      {helperText && !error ? (
        <HelperText helperText={helperText} />
      ) : (
        <span> </span>
      )}
      {error ? <InputError error={error} /> : undefined}
    </InputContainer>
  );
};

export type TagsProps = {
  suggestions?: Tag[];
  control: UseFormMethods["control"];
} & BaseInputProps;
export const Tags: React.FC<TagsProps> = (props: TagsProps) => {
  const { control, ...rest } = props;
  const {
    field: { onChange, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { required: true },
    defaultValue: [],
  });

  return <TagsBase onChange={onChange} tags={value} {...rest} />;
};
