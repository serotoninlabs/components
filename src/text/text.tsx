import styled, { DefaultTheme } from "styled-components";

export interface TextProps {
  font?: keyof DefaultTheme["fonts"];
}
export const Text = styled.span<TextProps>`
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.serif};
`;

export const SmallText = styled.small<TextProps>`
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.serif};
`;

export const StrongText = styled.strong<TextProps>`
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.serif};
  font-weight: bold;
`;

export const SectionHeading = styled.h2`
  margin: 10px 0;
`;
