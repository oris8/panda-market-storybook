import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import IconButton from "@/components/Button/IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  icon: <span>🔍</span>, // example icon
  children: "ICON BUTTON",
  isActive: false,
};

export const BaseOnlyIcon = Template.bind({});
BaseOnlyIcon.args = {
  className: "border-1 border-solid border-white",
  icon: <span>🥵</span>,
  isActive: false,
};

export const Delete: StoryFn<typeof IconButton.Delete> = (args) => (
  <IconButton.Delete {...args} />
);
Delete.args = {
  isActive: "hover",
  children: "DELETE",
};

export const Like: StoryFn<typeof IconButton.Like> = (args) => (
  <IconButton.Like {...args} />
);
Like.args = {
  isLiked: true,
  likeCount: 10,
  size: 26,
};
