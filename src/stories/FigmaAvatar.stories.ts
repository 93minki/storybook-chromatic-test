import type { Meta, StoryObj } from "@storybook/react";

import TestAvatar from "../components/TestAvatar/TestAvatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TestAvatar> = {
  title: "Figma/TestAvatar",
  component: TestAvatar,
};

export default meta;
type Story = StoryObj<typeof TestAvatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Secondary: Story = {
  args: {
    text: "Hello",
  },
};

meta.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/WVYb7yAoxO1b0K4UEP9u6X/storybook-figma-test?type=design&node-id=0-1&t=959d2Uozg3bZwV8E-0",
  },
};
