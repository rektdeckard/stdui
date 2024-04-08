import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { Spacer } from "../components/spacer";

const meta = {
  title: "Components/Spacer",
  tags: ["autodocs"],
  component: "su-spacer",
  argTypes: {
    type: {
      control: "select",
      options: ["invisible", "solid", "dashed"],
    },
  },
} satisfies Meta<Spacer>;

export default meta;
type Story = StoryObj<Spacer>;

export const Invisible: Story = {
  args: {
    type: "invisible",
  },
  render: ({ type }) => {
    return html`\
<div style="display: flex; align-items: center;">
  <div style="width: 40px; height: 40px; background: var(--su-purple200);"></div>
  <su-spacer type="${type}"></su-spacer>
  <div style="width: 40px; height: 40px; background: var(--su-green200);"></div>
  <su-spacer type=${type}></su-spacer>
  <div style="width: 40px; height: 40px; background: var(--su-yellow200);"></div>
</div>
`;
  },
}

export const Visible: Story = {
  args: {
    type: "dashed",
  },
  render: ({ type }) => {
    return html`\
<div style="display: flex; flex-direction: column; align-items: center; min-height: 200px;">
  <div style="width: 40px; height: 40px; background: var(--su-purple200);"></div>
  <su-spacer type="${type}"></su-spacer>
  <div style="width: 40px; height: 40px; background: var(--su-green200);"></div>
  <su-spacer type=${type}></su-spacer>
  <div style="width: 40px; height: 40px; background: var(--su-yellow200);"></div>
</div>
`;
  },
}
