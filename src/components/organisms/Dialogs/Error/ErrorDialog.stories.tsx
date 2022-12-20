import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BaseErrorDialog as ErrorDialog } from './ErrorDialog';

export default {
  component: ErrorDialog,
} as ComponentMeta<typeof ErrorDialog>;

export const Default: ComponentStoryObj<typeof ErrorDialog> = {
  args: {
    title: 'Error',
    message: 'エラーメッセージ',
    open: true,
  },
};
