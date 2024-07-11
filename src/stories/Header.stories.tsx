import Header from "@/components/Layout/Header";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {};

export const UserHeader: StoryFn<typeof Header> = (args) => (
  <Header {...args} />
);

UserHeader.args = {
  user: {
    image: null,
  },
  logout: () => console.log("logged out"),
};
