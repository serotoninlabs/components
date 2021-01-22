import { Meta, Story } from "@storybook/react";
import * as Buttons from "./Button";
import { ForwardIcon } from "../icons/Actions";
import styled from "styled-components";

export default {
  title: "Components/Buttons",
} as Meta;

const Container = styled.div`
  > div {
    &:first-child {
      font-weight: bold;
    }
    display: flex;
    flex-direction: row;
    > div {
      width: 200px;
      padding: 10px;
      border: 1px dotted #dfdfdf;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const AllButtons = (args) => {
  return (
    <Container>
      <div>
        <div>Component</div>
        <div>Normal</div>
        <div>Link</div>
        <div>Disabled</div>
      </div>
      <div>
        <div>Base</div>
        <div>
          <Buttons.Button>{args.label}</Buttons.Button>
        </div>
        <div>
          <Buttons.Button href="https://google.com">
            {args.label}
          </Buttons.Button>
        </div>
        <div>
          <Buttons.Button disabled>{args.label}</Buttons.Button>
        </div>
      </div>
      <div>
        <div>Primary</div>
        <div>
          <Buttons.PrimaryButton>{args.label}</Buttons.PrimaryButton>
        </div>
        <div>
          <Buttons.PrimaryButton href="https://google.com">
            {args.label}
          </Buttons.PrimaryButton>
        </div>
        <div>
          <Buttons.PrimaryButton disabled>{args.label}</Buttons.PrimaryButton>
        </div>
      </div>
      <div>
        <div>Inverted</div>
        <div>
          <Buttons.InvertedButton>{args.label}</Buttons.InvertedButton>
        </div>
        <div>
          <Buttons.InvertedButton href="https://google.com">
            {args.label}
          </Buttons.InvertedButton>
        </div>
        <div>
          <Buttons.InvertedButton disabled>{args.label}</Buttons.InvertedButton>
        </div>
      </div>
      <div>
        <div>Secondary</div>
        <div>
          <Buttons.SecondaryButton>{args.label}</Buttons.SecondaryButton>
        </div>
        <div>
          <Buttons.SecondaryButton href="https://google.com">
            {args.label}
          </Buttons.SecondaryButton>
        </div>
        <div>
          <Buttons.SecondaryButton disabled>
            {args.label}
          </Buttons.SecondaryButton>
        </div>
      </div>
      <div>
        <div>Action</div>
        <div>
          <Buttons.ActionButton icon={ForwardIcon} />
        </div>
        <div>
          <Buttons.ActionButton href="https://google.com" icon={ForwardIcon} />
        </div>
        <div>
          <Buttons.ActionButton disabled icon={ForwardIcon} />
        </div>
      </div>
      <div>
        <div>SecondaryAction</div>
        <div>
          <Buttons.SecondaryActionButton icon={ForwardIcon} />
        </div>
        <div>
          <Buttons.SecondaryActionButton
            href="https://google.com"
            icon={ForwardIcon}
          />
        </div>
        <div>
          <Buttons.SecondaryActionButton disabled icon={ForwardIcon} />
        </div>
      </div>
    </Container>
  );
};
AllButtons.args = {
  label: "Hello!",
};
