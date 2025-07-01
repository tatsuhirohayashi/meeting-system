import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
    title: "Atoms/TextArea",
    component: TextArea,
    tags: ["autodocs"],
    argTypes: {
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
    },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <TextArea
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
    args: {
        placeholder: "内容を入力してください",
        disabled: false,
    },
};