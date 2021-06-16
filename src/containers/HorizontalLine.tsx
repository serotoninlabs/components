import styled from "styled-components";

export const HorizontalLine = styled.hr<{width: string; colors?: string;}>`
height: 3px;
border: none;
margin: 0 auto;
width: ${(props) => props.width || "100%"};
background-image: linear-gradient(to left, ${(props) => props.colors || props.theme.colors.primary.text});
`;