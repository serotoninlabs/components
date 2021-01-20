import React, { useCallback, useState } from "react";
import { Story, Meta } from "@storybook/react";

import {
  Modal,
  ModalProps,
  ActionModal as ActionModalComponent,
} from "./Modal";

interface StoryProps {
  color?: ModalProps["color"];
  width?: string;
  alpha?: number;
}

export default {
  title: "Example/Modal",
  component: Modal,
} as Meta;

const Template: Story<StoryProps> = (args) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>show modal</button>
      <Modal visible={visible} width={args.width} color={args.color}>
        <h1>i am a modal</h1>
      </Modal>
    </div>
  );
};

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  foo: "foo",
  width: 200,
};

const ActionModalTemplate: Story<StoryProps> = (args) => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState<string>();

  const onAccept = useCallback(() => {
    setVisible(false);
    setResult("accepted");
  }, []);
  const onReject = useCallback(() => {
    setVisible(false);
    setResult("rejected");
  }, []);
  const onOuterClicked = useCallback(() => {
    setVisible(false);
    setResult("outer clicked");
  }, []);
  return (
    <div>
      <button onClick={() => setVisible(true)}>show modal</button>
      <div>result: {result}</div>
      <ActionModalComponent
        visible={visible}
        width={args.width}
        color={args.color}
        alpha={args.alpha}
        onAccept={onAccept}
        onReject={onReject}
        onOuterClicked={onOuterClicked}
      >
        <h1>i am a modal</h1>
      </ActionModalComponent>
    </div>
  );
};

export const ActionModal = ActionModalTemplate.bind({});
export const WarningModal = ActionModalTemplate.bind({
  color: "caution",
  alpha: "0.5",
});
