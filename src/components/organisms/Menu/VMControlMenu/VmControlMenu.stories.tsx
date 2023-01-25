import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import schema from '@openapi-spec/v1.json';

import { BaseVmControlMenu as VmControlMenu } from './VmControlMenu';

export default {
  component: VmControlMenu,
} as ComponentMeta<typeof VmControlMenu>;

export const Default: ComponentStoryObj<typeof VmControlMenu> = {
  args: {
    vms: [
      schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
        .vms[0].metadata.id,
    ],
  },
};

export const Open: ComponentStoryObj<typeof VmControlMenu> = {
  args: {
    vms: [
      schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
        .vms[0].metadata.id,
    ],
  },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const button = body.getByRole<HTMLButtonElement>('button');
    userEvent.click(button);
    await waitFor(() => {
      const menu = body.getByRole<HTMLMenuElement>('menu');
      expect(menu.hidden).toBeFalsy();
    });
  },
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
};

export const Disabled: ComponentStoryObj<typeof VmControlMenu> = {
  args: {
    vms: [],
  },
};
