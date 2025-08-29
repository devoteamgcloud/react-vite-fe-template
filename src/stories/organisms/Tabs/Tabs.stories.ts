import type { Meta, StoryObj } from '@storybook/react-vite';
import Tabs from '../../../components/common/organisms/Tabs';
import { ExampleTabs } from './TabItems';

const meta = {
    title: "Organisms/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },

} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        items: ExampleTabs,
        defaultKey: "Tab 3",
    },
    argTypes: {
        defaultKey: {
            control: 'select',
            options: ['Tab 1', 'Tab 2', 'Tab 3'],
            value: "Tab 3",
            description: "Set the default tab view"
        },
        items: {
            control: {
                disable: true
            },
        }

    }
};