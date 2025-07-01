import type { Meta, StoryObj } from "@storybook/react";
import { MUIButton } from "./MuiButton";

const meta: Meta<typeof MUIButton> = {
    title: "Atoms/MUIButton",
    component: MUIButton,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["text", "outlined", "contained"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "error", "info", "success", "warning"],
        },
        type: {
            control: "select",
            options: ["button", "submit", "reset"],
        },
        children: { control: "text" },
    },
};
export default meta;

type Story = StoryObj<typeof MUIButton>;

export const Default: Story = {
    args: {
        children: "MUIボタン",
        variant: "contained",
        color: "primary",
        type: "button",
        onClick: () => alert("クリックされました！"),
    },
};