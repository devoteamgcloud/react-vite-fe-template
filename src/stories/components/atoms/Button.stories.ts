import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../../components/common/atoms/Button'
import { fn } from 'storybook/internal/test'


const meta = {
    title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onClick: fn(),
        text: "Default",
        variant: 'outlined'
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'success', 'info']
        },
        fullWidth: {
            control: 'boolean',
        },
        rounded: {
            control: 'boolean',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        width: {
            control: 'number'
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined']
        }
    }
}

export const Primary: Story = {
    args: {
        onClick: fn(),
        text: "Primary",
        color: 'primary',
        width: 100,
        fullWidth: true,
        variant: 'filled',
        rounded: false,
        size: 'medium',
    },
}

export const Secondary: Story = {
    args: {
        onClick: () => {},
        text: "Secondary",
        color: 'secondary',
        width: 100,
        fullWidth: false,
        variant: 'filled',
        rounded: false,
        size: 'medium',
    },
}

export const Danger: Story = {
    args: {
        onClick: fn(),
        text: "Danger",
        color: 'danger',
        width: 100,
        fullWidth: false,
        variant: 'filled',
        rounded: false,
        size: 'medium',
    },
}

export const Success: Story = {
    args: {
        onClick: fn(),
        text: "Success",
        color: 'success',
        width: 100,
        fullWidth: false,
        variant: 'filled',
        rounded: false,
        size: 'medium',
    },
}

export const Info: Story = {
    args: {
        onClick: fn(),
        text: "Info",
        color: 'info',
        width: 100,
        fullWidth: false,
        variant: 'filled',
        rounded: false,
        size: 'medium',
    },
}