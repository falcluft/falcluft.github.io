import type { Meta } from '@storybook/react';

import { MyModalDialog } from './MyModalDialog';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MyModalDialog> = {
  title: 'Example/MyModalDialog',
  component: MyModalDialog,
  tags: ['autodocs'],
  argTypes: {
    text: 'Simple text',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main = {
  args: {
    text: 'Some text',
  },
};