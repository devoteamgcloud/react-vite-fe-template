import type {Meta, StoryObj } from '@storybook/react-vite';
import BaseLayout from '../../../components/common/Layout/Header';

const meta = {
  title: "Layout/Header",
  component: BaseLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof BaseLayout>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Title of the BaseLayout",
    subtitle: "Subtitle goes here",
    actions: null
  },
  argTypes: {
    actions: {
      control: {
        disable: true,
      }
    }
  }
};