import React from "react";
import styled from "styled-components";
import { ButtonProps, buttonSizes, circleSize } from "./Button";
import { IconButton } from "./IconButton";
import { AiOutlineBell } from "react-icons/ai";

const spacing: {
  [index: string]: { top: string; right: string; fontSize: string };
} = {
  [buttonSizes.SMALL]: { top: "15px", right: "-10px", fontSize: "0.7rem" },
  [buttonSizes.MEDIUM]: { top: "25px", right: "-8px", fontSize: "0.8rem" },
  [buttonSizes.LARGE]: { top: "55px", right: "-8px", fontSize: "1.2rem" },
};

const StyledIconButton = styled(IconButton)`
  position: relative;
  display: inline-block;
  > div {
    font-size: ${(props) => spacing[props.size || buttonSizes.MEDIUM].fontSize};
    position: absolute;
    top: ${(props) => spacing[props.size || buttonSizes.MEDIUM].top};
    right: ${(props) => spacing[props.size || buttonSizes.MEDIUM].right};
    padding: 3px 6px;
    border-radius: 50%;
    background-color: blue;
    color: white;
    line-height: ${(props) =>
      spacing[props.size || buttonSizes.MEDIUM].fontSize};
  }
`;

export const NotificationsButton: React.FC<
  { count?: number } & ButtonProps
> = ({ count, ...props }) => {
  let notifications;
  if (count && count > 0) {
    notifications = <div>{count}</div>;
  }

  let iconSize = circleSize[props.size || buttonSizes.MEDIUM];

  return (
    <StyledIconButton icon={<AiOutlineBell size={iconSize} />} {...props}>
      {notifications}
    </StyledIconButton>
  );
};
