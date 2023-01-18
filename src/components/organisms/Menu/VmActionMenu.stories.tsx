import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, screen } from '@storybook/testing-library';

import { VmActionMenu } from './VmActionMenu';

export default {
  component: VmActionMenu,
} as ComponentMeta<typeof VmActionMenu>;

export const Default: ComponentStoryObj<typeof VmActionMenu> = {
  args: {},
};

export const Open: ComponentStoryObj<typeof VmActionMenu> = {
  args: {},
  play: async () => {
    const button = screen.getByRole<HTMLButtonElement>('button');
    userEvent.click(button);
    await waitFor(() => {
      const menu = screen.getByRole<HTMLMenuElement>('menu');
      expect(menu.hidden).toBeFalsy();
    });
  },
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
};
