import styled, { DefaultTheme } from "styled-components";

export interface TextProps {
  font?: keyof DefaultTheme["fonts"];
}
export const Text = styled.span<TextProps>`
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.serif};
`;

export const SectionHeading = styled.h2`
  margin: 10px 0;
`;
