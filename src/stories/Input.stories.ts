
import type { Meta, StoryObj } from "@storybook/web-components";
import { fn } from "@storybook/test";
import { html } from "lit";
import { Input } from "../components/input";

const meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  component: "su-input",
  argTypes: {
    type: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
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
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { onInput: fn() },
} satisfies Meta<Input & { onInput: HTMLInputElement["oninput"] }>;

export default meta;
type Story = StoryObj<Input & { onInput: HTMLInputElement["oninput"] }>;

export const Default: Story = {
  args: {
    type: "text",
    value: "",
    label: "Address",
    status: "primary",
    variant: "block",
    required: false,
    disabled: false,
  },
  render: ({ type, value, label, status, variant, required, disabled, slot, onInput }) => {
    return html`\
<su-input
  type="${type}"
  value=${value}
  label=${label}
  status="${status}"
  variant="${variant}"
  ?required=${required}
  ?disabled=${disabled}
  @input=${onInput}
>
  ${slot}
</su-input>
`;
  }
}
