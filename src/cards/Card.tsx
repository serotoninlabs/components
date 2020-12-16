import React from "react";
import styled from "styled-components";
import { SectionHeading, Text } from "../text";
import { Container, ContainerSize } from "./Container";

export const StyledCard = styled(Container)`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.text};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  border: ${(props) => props.theme.colors.primary.border};
`;

export interface CardProps {
  href?: string;
  size?: ContainerSize;
}
export const Card: React.FunctionComponent<CardProps> = (props) => {
  const { href, ...rest } = props;

  return <StyledCard {...rest}>{props.children}</StyledCard>;
};

export const CardHeading = styled(SectionHeading)``;
export const CardContent = styled(Text)``;
export const CardImage = styled.img``;

export const Panel = styled(Card)`
  width: 100%;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary.main};
  border-bottom: 1px solid #cccccc;
`;

export const CardBody = styled.div`
  padding: 15px;
  font-size: 1rem;
`;

export const CardFooter = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  background-color: #f5f5f5;
  border-top: 1px solid #f0f0f0;
`;
