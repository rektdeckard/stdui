
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { Separator } from "../components/separator";

const meta = {
  title: "Components/Separator",
  tags: ["autodocs"],
  component: "su-separator",
  argTypes: {
  },
} satisfies Meta<Separator>;

export default meta;
type Story = StoryObj<Separator>;

export const Default: Story = {
  args: {
  },
  render: ({ }) => {
    return html`\
<div style="height: 40px; background: var(--su-purple200);"></div>
<su-separator></su-separator>
<div style="height: 40px; background: var(--su-green200);"></div>
<su-separator></su-separator>
<div style="height: 40px; background: var(--su-yellow200);"></div>
`;
  },
}

export const Bar: Story = {
  args: {
  },
  render: ({ }) => {
    return html`\
<div style="display: flex;">
  <div style="width: 400px; height: 40px; background: var(--su-purple200);"></div>
  <su-separator bar></su-separator>
  <div style="width: 400px; height: 40px; background: var(--su-green200);"></div>
  <su-separator bar></su-separator>
  <div style="width: 400px; height: 40px; background: var(--su-yellow200);"></div>
</div>
`;
  },
}
