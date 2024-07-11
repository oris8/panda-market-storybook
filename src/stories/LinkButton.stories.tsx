import { LinkButton } from "@/components/Button/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/LinkButton",
  component: LinkButton,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    outline: {
      control: { type: "boolean" },
    },
    children: { control: "text" },
  },
} as Meta<typeof LinkButton>;

const Template: StoryFn<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "LinkButton",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary LinkButton",
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  variant: "primary",
  outline: true,
  children: "Primary Outline LinkButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary LinkButton",
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  variant: "secondary",
  outline: true,
  children: "Secondary Outline LinkButton",
};
