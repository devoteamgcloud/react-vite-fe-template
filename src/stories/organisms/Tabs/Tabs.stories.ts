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
    },
    argTypes: {
        defaultKey: {
            control: {
                disable: true
            }
        }
    }
};