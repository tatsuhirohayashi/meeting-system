import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MuiTextArea } from "./MuiTextArea";

const meta: Meta<typeof MuiTextArea> = {
    title: "Atoms/MuiTextArea",
    component: MuiTextArea,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
    },
};
export default meta;

type Story = StoryObj<typeof MuiTextArea>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <MuiTextArea
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
    args: {
        label: "ご意見",
        placeholder: "ご自由にお書きください",
        disabled: false,
    },
};