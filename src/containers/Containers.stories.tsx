import { Meta } from "@storybook/react";
import * as Containers from "./Container";
import { Heading, SmallText, Text } from "../text";
import { Row } from "./layout";

export default {
  title: "Components/Containers",
} as Meta;

export const HighlightContainer = (args) => {
  return (
    <div style={{ maxWidth: 1024 }}>
      <Containers.HighlightContainer>
        <Heading>{args.heading}</Heading>
        <Text>{args.subheading}</Text>
        <Row>
          <Containers.ActionCard size="medium">
            <Heading>Action 1</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              purus non enim praesent elementum facilisis leo. Suscipit
              adipiscing bibendum est ultricies. Id interdum velit laoreet id.
            </Text>
          </Containers.ActionCard>
          <Containers.ActionCard size="medium">
            <Heading>Action 2</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              purus non enim praesent elementum facilisis leo. Suscipit
              adipiscing bibendum est ultricies. Id interdum velit laoreet id.
            </Text>
          </Containers.ActionCard>
        </Row>
      </Containers.HighlightContainer>
    </div>
  );
};
HighlightContainer.args = {
  heading: "Hello World!",
  subheading: "This is the sub heading",
};

export const ListContainer = () => {
  const items = [
    {
      id: 1,
      left: "",
      center:
        "Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam",
      right: "foo",
    },
    {
      id: 2,
      left: "a",
      center: "Pharetra sit amet aliquam id diam",
      right: "barrrr",
    },
    { id: 3, left: "a", center: "Ut enim blandit", right: "foo" },
    {
      id: 4,
      left: "a",
      center: "Pharetra sit amet aliquam id diam",
      right: "fobao",
    },
  ];
  return (
    <div style={{ maxWidth: 1024 }}>
      <Containers.ListCard>
        {items.map((i) => (
          <Containers.ListCardItem key={i.id}>
            <Containers.ListCardElement>{i.left}</Containers.ListCardElement>
            <Containers.ListCardElement>
              <SmallText>banana</SmallText>
              <Heading>{i.center}</Heading>
            </Containers.ListCardElement>
            <Containers.ListCardElement>{i.right}</Containers.ListCardElement>
          </Containers.ListCardItem>
        ))}
      </Containers.ListCard>
    </div>
  );
};
