import Input from "@/components/Input/Input";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    value: { control: "text" },
    placeholder: { control: "text" },
    autoComplete: {
      control: { type: "boolean" },
    },
    error: { control: { type: "boolean" } },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
  placeholder: "기본 인풋입니다",
};

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  variant: "primary",
  placeholder: "primary 인풋입니다",
};

export const PrimaryErrorInput = Template.bind({});
PrimaryInput.args = {
  variant: "primary",
  placeholder: "primary 인풋입니다 error !!",
  error: true,
};

export const TextArea: StoryFn<typeof Input.TextArea> = (args) => (
  <Input.TextArea {...args} />
);
TextArea.args = {
  placeholder: "인풋입니다",
};
