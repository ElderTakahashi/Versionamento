import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { fn } from "storybook/test";
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: "Clique aqui", variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Clique aqui", variant: "secondary" },
};

export const Large: Story = {
  args: { label: "Clique aqui", size: "large" },
};

export const Small: Story = {
  args: { label: "Clique aqui", size: "small" },
};

export const Disabled: Story = {
  args: { label: "Desabilitado", disabled: true },
};
