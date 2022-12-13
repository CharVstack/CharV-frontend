import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

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

export const Disabled: ComponentStoryObj<typeof VmControlMenu> = {
  args: {
    vms: [],
  },
};
