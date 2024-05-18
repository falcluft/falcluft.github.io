import type { Meta } from '@storybook/react';

import { MyButton } from './MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MyButton> = {
  title: 'Example/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Green = {
  args: {
    label: 'Button green'
  },
};