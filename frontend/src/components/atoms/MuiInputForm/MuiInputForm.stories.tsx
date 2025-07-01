import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MuiInputForm } from "./MuiInputForm";

const meta: Meta<typeof MuiInputForm> = {
    title: "Atoms/MuiInputForm",
    component: MuiInputForm,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
        type: {
            control: "select",
            options: ["text", "email", "password", "number"],
        },
    },
};
export default meta;

type Story = StoryObj<typeof MuiInputForm>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <MuiInputForm
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
    args: {
        label: "お名前",
        placeholder: "名前を入力してください",
        disabled: false,
        type: "text",
    },
};