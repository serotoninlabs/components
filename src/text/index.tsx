import styled, { DefaultTheme } from "styled-components";

export interface TextProps {
  font?: keyof DefaultTheme["fonts"];
}
export const Text = styled.span<TextProps>`
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.sansSerif};
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

export const Heading = styled.h2<TextProps>`
  font-weight: 400;
  margin: 0px;
  font-family: ${(props) =>
    props.font ? props.theme.fonts[props.font] : props.theme.fonts.sansSerif};
`;
export const Subheading = styled.h3``;

export const SectionHeading = styled.h2`
  margin: 10px 0;
`;
