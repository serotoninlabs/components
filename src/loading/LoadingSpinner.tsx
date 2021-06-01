import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  position: absolute;
  left: 10%;
  top: 0;
`;

export const StyledSpinner = styled.div<{ fillColor?: string }>`
  text-align: center;
  font-size: 1em;
  circle {
    stroke: ${(props) =>
      props.fillColor
        ? props.fillColor
        : props.theme.buttons.primary.base.text};
  }
`;

export const LoadingSpinner: React.FC<{ fillColor?: string }> = ({
  fillColor,
}) => {
  return (
    <StyledLoadingSpinner>
      <StyledSpinner fillColor={fillColor}>
        <CircularProgress />
      </StyledSpinner>
    </StyledLoadingSpinner>
  );
};
