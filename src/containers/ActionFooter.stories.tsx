import { Meta } from "@storybook/react";
import * as Containers from "./Container";
import { Heading, SmallText, Text } from "../text";
import { MainContent, Row } from "./layout";
import { ActionFooter as ActionFooterComponent } from "./ActionFooter";
import {
  Button,
  InvertedButton,
  PrimaryButton,
  buttonSizes,
} from "../buttons/Button";

export default {
  title: "Components/Containers",
  component: ActionFooterComponent,
} as Meta;

export const ActionFooter = () => {
  return (
    <MainContent>
      <Containers.Card size="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi.
        Odio tempor orci dapibus ultrices in iaculis nunc. Lacus vestibulum sed
        arcu non odio euismod lacinia. Convallis posuere morbi leo urna molestie
        at elementum eu. Et tortor at risus viverra adipiscing at in tellus
        integer. Eros donec ac odio tempor orci. Tristique et egestas quis ipsum
        suspendisse. Et tortor at risus viverra adipiscing at in tellus. Nisl
        purus in mollis nunc. Nullam eget felis eget nunc lobortis mattis
        aliquam faucibus purus.
      </Containers.Card>
      <Containers.Card size="small">
        Eros in cursus turpis massa tincidunt dui ut ornare lectus. Hendrerit
        gravida rutrum quisque non tellus orci ac auctor augue. Malesuada
        bibendum arcu vitae elementum curabitur vitae. Congue mauris rhoncus
        aenean vel elit scelerisque. Nec ullamcorper sit amet risus. Feugiat sed
        lectus vestibulum mattis ullamcorper. Feugiat pretium nibh ipsum
        consequat nisl vel. Porttitor leo a diam sollicitudin tempor. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
        pretium. Amet consectetur adipiscing elit pellentesque habitant morbi
        tristique. In nibh mauris cursus mattis molestie a. Orci dapibus
        ultrices in iaculis nunc sed augue. Ullamcorper dignissim cras tincidunt
        lobortis feugiat vivamus at. Donec pretium vulputate sapien nec
        sagittis. Massa massa ultricies mi quis hendrerit dolor magna. Nulla
        pharetra diam sit amet nisl suscipit adipiscing bibendum est. Magna
        etiam tempor orci eu.
      </Containers.Card>
      <Containers.Card size="small">
        In nibh mauris cursus mattis molestie a iaculis at. Bibendum arcu vitae
        elementum curabitur vitae nunc sed velit dignissim. Pharetra vel turpis
        nunc eget lorem dolor. Vulputate sapien nec sagittis aliquam malesuada
        bibendum arcu vitae elementum. Diam maecenas sed enim ut sem viverra
        aliquet. Vitae et leo duis ut diam quam nulla porttitor. Id diam vel
        quam elementum pulvinar etiam non quam. Diam maecenas sed enim ut sem
        viverra. Enim tortor at auctor urna nunc id cursus metus aliquam. In
        pellentesque massa placerat duis ultricies. Vitae purus faucibus ornare
        suspendisse sed nisi lacus sed viverra. Mattis ullamcorper velit sed
        ullamcorper morbi. Sed vulputate odio ut enim blandit volutpat maecenas.
        Nisl purus in mollis nunc. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a scelerisque. Ac odio tempor orci dapibus ultrices in
        iaculis nunc.
      </Containers.Card>
      <Containers.Card size="small">
        Dapibus ultrices in iaculis nunc sed augue lacus viverra. Malesuada
        fames ac turpis egestas sed tempus urna et. Sem nulla pharetra diam sit
        amet nisl. Sed enim ut sem viverra aliquet eget sit amet. Egestas sed
        sed risus pretium quam vulputate dignissim suspendisse. Feugiat in ante
        metus dictum at. Sit amet mauris commodo quis imperdiet massa tincidunt
        nunc. Vestibulum sed arcu non odio euismod lacinia at quis. Ut eu sem
        integer vitae justo eget. Erat nam at lectus urna duis convallis
        convallis tellus id. Blandit volutpat maecenas volutpat blandit aliquam
        etiam erat velit scelerisque. Sed adipiscing diam donec adipiscing.
        Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
        pellentesque. Orci a scelerisque purus semper eget. A erat nam at lectus
        urna duis convallis. Et molestie ac feugiat sed.
      </Containers.Card>
      <Containers.Card size="small">
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi
        tristique. Commodo quis imperdiet massa tincidunt. Feugiat nisl pretium
        fusce id velit. Sagittis nisl rhoncus mattis rhoncus urna. Posuere urna
        nec tincidunt praesent semper. Sed pulvinar proin gravida hendrerit
        lectus. Ultricies lacus sed turpis tincidunt id aliquet risus. Tellus
        integer feugiat scelerisque varius morbi. Id donec ultrices tincidunt
        arcu non sodales neque. Bibendum at varius vel pharetra vel turpis nunc
        eget lorem. Elementum facilisis leo vel fringilla. Amet cursus sit amet
        dictum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
        Enim tortor at auctor urna nunc id cursus metus aliquam. Laoreet id
        donec ultrices tincidunt arcu non sodales neque. Aliquet bibendum enim
        facilisis gravida neque convallis a. Consequat semper viverra nam libero
        justo.
      </Containers.Card>
      <ActionFooterComponent
        message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        button1={
          <Button size={buttonSizes.SMALL_WIDE}>Secondary Action</Button>
        }
        button2={
          <InvertedButton size={buttonSizes.SMALL_WIDE}>
            Primary Action
          </InvertedButton>
        }
      />
    </MainContent>
  );
};
