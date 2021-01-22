import React from "react";
import styled from "styled-components";
import { Text } from "../text";
import { FieldError } from "./Base";

const Container = styled.div`
  font-size: 1rem;
  color: darkred;
`;

export const InputError = ({ error }: { error: FieldError }) => {
  return (
    <Container>
      <Text>{error.message}</Text>
    </Container>
  );
};
