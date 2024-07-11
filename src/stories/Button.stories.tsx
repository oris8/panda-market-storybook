import { Button } from "@/components/Button/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  variant: "primary",
  outline: true,
  children: "Primary Outline Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  variant: "secondary",
  outline: true,
  children: "Secondary Outline Button",
};
