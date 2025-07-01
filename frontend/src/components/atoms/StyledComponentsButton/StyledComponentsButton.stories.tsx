import type { Meta, StoryObj } from "@storybook/react";
import { StyledComponentsButton } from "./StyledComponentsButton";

const meta: Meta<typeof StyledComponentsButton> = {
    title: "Atoms/StyledComponentsButton",
    component: StyledComponentsButton,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof StyledComponentsButton>;

export const Default: Story = {
    args: {
        children: "ボタン",
        type: "button",
        onClick: () => alert("クリックされました！"),
    },
};

export const Submit: Story = {
    args: {
        children: "送信",
        type: "submit",
    },
};