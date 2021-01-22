import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import { buttonSizes } from "./Button";
import { NotificationsButton } from "./NotificationsButton";

export default {
  title: "Components/Buttons",
} as Meta;

export const Notifications = (args) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: row;
        align-items: center;
      `}
    >
      <div>
        <div>
          <NotificationsButton count={args.count} size={buttonSizes.SMALL} />
        </div>
        <div>
          <NotificationsButton count={args.count} size={buttonSizes.MEDIUM} />
        </div>
        <div>
          <NotificationsButton count={args.count} size={buttonSizes.LARGE} />
        </div>
      </div>
      <div>
        <div>
          <NotificationsButton count={1} size={buttonSizes.SMALL} />
        </div>
        <div>
          <NotificationsButton count={1} size={buttonSizes.MEDIUM} />
        </div>
        <div>
          <NotificationsButton count={1} size={buttonSizes.LARGE} />
        </div>
      </div>
    </div>
  );
};
Notifications.args = {
  count: 0,
};
