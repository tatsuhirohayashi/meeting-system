import type { Meta, StoryObj } from "@storybook/react";
import { EmotionButton } from "./EmotionButton";

const meta: Meta<typeof EmotionButton> = {
    title: "Atoms/EmotionButton",
    component: EmotionButton,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof EmotionButton>;

export const Default: Story = {
    args: {
        children: "Emotion Button",
        type: "button",
        onClick: () => alert("Emotion Button がクリックされました!"),
    },
};