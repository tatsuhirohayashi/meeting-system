import type { Meta, StoryObj } from "@storybook/react";
import { CommonButton } from "./CommonButton";

const meta: Meta<typeof CommonButton> = {
    title: "Atoms/CommonButton",
    component: CommonButton,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CommonButton>;

export const Default: Story = {
    args: {
        children: "ボタン",
        type: "button",
        onClick: () => alert("クリックされました！"),
    },
};

export const Submit: Story = {
    args: {
        children: "送信する",
        type: "submit",
    },
};