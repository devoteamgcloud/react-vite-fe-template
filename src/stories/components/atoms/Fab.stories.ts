import type {Meta, StoryObj } from '@storybook/react-vite';
import Fab from '../../../components/common/atoms/Fab/Fab';

const meta = {
    title: "Atoms/Fab",
    component: Fab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    }
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onClick: () => {},
        color: 'primary',
    }
};