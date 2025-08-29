import type {Meta, StoryObj } from '@storybook/react-vite'
import List from '../../../components/common/molecules/List'

const meta = {
    title: "Molecules/List",
    component: List,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    }
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: "Title of the BaseLayout",
        items: ["Item 1", "Item 2", "Item 3"]
    },
}