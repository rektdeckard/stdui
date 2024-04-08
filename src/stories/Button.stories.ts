import type { Meta, StoryObj } from "@storybook/web-components";
import { fn } from "@storybook/test";
import { html } from "lit";
import { Button } from "../components/button";

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: "su-button",
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
    compact: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    slot: "PRIMARY",
    status: "primary",
    variant: "block",
    compact: false,
    disabled: false,
  },
  render: ({ status, variant, compact, disabled, slot, onClick, ...args }) => {
    void args;
    return html`\
<su-button
  status="${status}"
  variant="${variant}"
  ?compact=${compact}
  ?disabled=${disabled}
  @click=${onClick}
>
  ${slot}
</su-button>
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
<su-button status="${status}" variant="${variant}">${(status ?? "").toUpperCase()}</su-button>
<su-button status="secondary">SECONDARY</su-button>
<su-button status="info">INFO</su-button>
<su-button status="success">SUCCESS</su-button>
<su-button status="warning">WARNING</su-button>
<su-button status="failure">FAILURE</su-button>
<su-button status="debug">DEBUG</su-button>
  `},
};

export const Line: Story = {
  render: () => html`\
<su-button variant="line">PRIMARY</su-button>
<su-button variant="line" status="secondary">SECONDARY</su-button>
<su-button variant="line" status="info">INFO</su-button>
<su-button variant="line" status="success">SUCCESS</su-button>
<su-button variant="line" status="warning">WARNING</su-button>
<su-button variant="line" status="failure">FAILURE</su-button>
<su-button variant="line" status="debug">DEBUG</su-button>
  `,
};

export const Compact: Story = {
  render: () => html`\
<su-button compact variant="line">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4h2v4h2v-8h-2v2h-2zm-6 0v2h6v-2zm-2-2h2v2h-2zm0 0V6H8v6z"/></svg>
</su-button>
<su-button compact variant="line" status="debug">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3zm15 6V4h-4v4zM8 19v-3H4v4h4z"/></svg>
</su-button>
<su-button compact status="failure">
  ABORT
</su-button>
<su-button compact status="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4"/></svg>
  PARAMETERS
</su-button>
<su-button compact status="info">
  <small>BINK</small>
</su-button>
  `,
};

export const Disabled: Story = {
  render: () => html`\
<su-button disabled>PRIMARY</su-button>
<su-button disabled status="secondary">SECONDARY</su-button>
<su-button disabled status="info">INFO</su-button>
<su-button disabled variant="line" status="success">SUCCESS</su-button>
<su-button disabled compact status="warning">WARNING</su-button>
<su-button disabled compact status="failure">FAILURE</su-button>
<su-button disabled compact variant="line" status="debug">DEBUG</su-button>
  `,
};

export const WithIcon: Story = {
  render: () => html`\
<su-button variant="line">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z"/></svg>
</su-button>
<su-button variant="line" status="debug">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3h-4v2H8v4h2v2h1v8H6v-4h2v-2H4v6h2v2h12v-2h2v-6h-4v2h2v4h-5v-8h1V9h2V5h-2zm0 2v4h-4V5z"/></svg>
</su-button>
<su-button status="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3H7v2H2v16h20V5h-5V3zm8 4h3v12H4V7h5V5h6v2zm-7 2h4v2h-4zm4 6h-4v2h4zh2v-4h-2zm-6-4h2v4H8z"/></svg>
  CAPTURE
</su-button>
<su-button status="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 3H5v4h2zm4 0H9v4h2zm2 0h2v4h-2zm8 6H3v12h14v-5h4zm-2 5h-2v-3h2zM5 11h10v8H5z"/></svg>
  DISPENSE BEVERAGE
</su-button>
<su-button status="info">
  EXPLAIN
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 2H5v4h4zm7 7V7H2v9h2v6h2v-6h2v6h2V9zm-5-7h11v14H11v-2h9V4h-9z"/></svg>
</su-button>
  `,
};

