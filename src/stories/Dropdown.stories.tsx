import Dropdown from "@/components/Dropdown/Dropdown";
import PrimaryDropdown from "@/components/Dropdown/PrimaryDropdown";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    position: { control: "radio", options: ["left", "center", "right"] },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Base = Template.bind({});
Base.args = {};

export const PrimaryText: StoryFn<typeof PrimaryDropdown> = (args) => (
  <PrimaryDropdown {...args} />
);

PrimaryText.args = {
  buttonContent: "Primary Dropdown",
  options: [
    {
      option: { label: "Option 1", value: "option01" },
      onChange: () => console.log("Option 1 clicked"),
    },
    {
      option: { label: "Option 2", value: "option02" },
      onChange: () => console.log("Option 2 clicked"),
    },
    {
      option: { label: "Option 3", value: "option03" },
      onChange: () => console.log("Option 3 clicked"),
    },
  ],
};

export const PrimaryCustom: StoryFn<typeof PrimaryDropdown> = (args) => (
  <PrimaryDropdown {...args} />
);

PrimaryCustom.args = {
  buttonContent: <span>😎 Click ME 😎</span>,
  options: [
    {
      option: { label: "Option 1", value: "option01" },
      onChange: () => console.log("Option 1 clicked"),
    },
    {
      option: { label: "Option 2", value: "option02" },
      onChange: () => console.log("Option 2 clicked"),
    },
    {
      option: { label: "Option 3", value: "option03" },
      onChange: () => console.log("Option 3 clicked"),
    },
  ],
};
