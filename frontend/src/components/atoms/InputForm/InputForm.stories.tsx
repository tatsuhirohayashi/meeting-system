import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InputForm } from "./InputForm";

const meta: Meta<typeof InputForm> = {
    title: "Atoms/InputForm",
    component: InputForm,
    tags: ["autodocs"],
    argTypes: {
        placeholder: { control: "text" },
        type: {
            control: "select",
            options: ["text", "email", "password", "number"],
        },
    },
};
export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <InputForm
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
    args: {
        placeholder: "テキストを入力",
        disabled: false,
    },
};