import Dropdown from "@/components/Dropdown/Dropdown";
import PrimaryDropdown from "@/components/Dropdown/PrimaryDropdown";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
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
    ["Option 1", () => console.log("Option 1 clicked")],
    ["Option 2", () => console.log("Option 2 clicked")],
    ["Option 3", () => console.log("Option 3 clicked")],
  ],
};

export const PrimaryCustom: StoryFn<typeof PrimaryDropdown> = (args) => (
  <PrimaryDropdown {...args} />
);

PrimaryCustom.args = {
  buttonContent: <span>😎 Click ME 😎</span>,
  options: [
    ["Option 1", () => console.log("Option 1 clicked")],
    ["Option 2", () => console.log("Option 2 clicked")],
    ["Option 3", () => console.log("Option 3 clicked")],
  ],
};
