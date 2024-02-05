import Avatar from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    width: "24px",
    label: "V",
  },
};
