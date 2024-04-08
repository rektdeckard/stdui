
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { Badge } from "../components/badge";

const meta = {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: "su-badge",
  argTypes: {
    slot: { control: "text" },
    status: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "failure",
        "debug",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["block", "line"],
    },
  },
  args: {},
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<Badge>;

export const Default: Story = {
  args: {
    slot: "DEFAULT",
    variant: "block",
  },
  render: ({ status, variant, slot, ...args }) => {
    void args;
    return html`
<su-badge status="${status}" variant="${variant}">
  ${slot}
</su-badge>
    `;
  },
};

export const Block: Story = {
  args: {
    status: "primary",
    variant: "block",
  },
  render: ({ status, variant, ...args }) => {
    void args;
    return html`\
<su-badge>DEFAULT</su-badge>
<su-badge status="${status}" variant="${variant}">${(status ?? "").toUpperCase()}</su-badge>
<su-badge status="secondary">SECONDARY</su-badge>
<su-badge status="info">INFO</su-badge>
<su-badge status="success">SUCCESS</su-badge>
<su-badge status="warning">WARNING</su-badge>
<su-badge status="failure">FAILURE</su-badge>
<su-badge status="debug">DEBUG</su-badge>
  `},
};

export const Line: Story = {
  render: () => html`\
<su-badge variant="line">DEFAULT</su-badge>
<su-badge variant="line" status="primary">PRIMARY</su-badge>
<su-badge variant="line" status="secondary">SECONDARY</su-badge>
<su-badge variant="line" status="info">INFO</su-badge>
<su-badge variant="line" status="success">SUCCESS</su-badge>
<su-badge variant="line" status="warning">WARNING</su-badge>
<su-badge variant="line" status="failure">FAILURE</su-badge>
<su-badge variant="line" status="debug">DEBUG</su-badge>
  `,
};
