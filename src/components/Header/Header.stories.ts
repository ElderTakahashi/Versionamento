import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Meu Projeto" },
};

export const WithSubtitle: Story = {
  args: {
    title: "Meu Projeto",
    subtitle: "Aprendendo Storybook com React + Vite",
  },
};
