import Card1 from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/Card1",
  component: Card1,
} satisfies Meta<typeof Card1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {},
};
