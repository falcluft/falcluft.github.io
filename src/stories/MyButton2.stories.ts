import type { Meta } from '@storybook/react';

import { MyButton2 } from './MyButton2';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MyButton2> = {
  title: 'Example/MyButton2',
  component: MyButton2,
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Green = {
  args: {
    label: 'Button green',
  },
};