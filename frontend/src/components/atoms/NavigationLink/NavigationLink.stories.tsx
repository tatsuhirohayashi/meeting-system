import type { Meta, StoryObj } from "@storybook/react";
import { NavigationLink } from "./NavigationLink";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof NavigationLink> = {
    title: "Atoms/NavigationLink",
    component: NavigationLink,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <Story />
                </ul>
            </MemoryRouter>
        ),
    ],
    argTypes: {
        title: { control: "text" },
        linkPath: { control: "text" },
    },
};
export default meta;

type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
    args: {
        title: "トップへ",
        linkPath: "/",
    },
};