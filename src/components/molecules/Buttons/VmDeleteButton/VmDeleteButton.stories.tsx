import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import schema from '@openapi-spec/v1.json';

import { BaseVmDeleteButton as VmDeleteButton } from './VmDeleteButton';

export default { component: VmDeleteButton } as ComponentMeta<typeof VmDeleteButton>;

export const Default: ComponentStoryObj<typeof VmDeleteButton> = {
  args: {
    vms: schema.components.responses.GetAllVMsList200Response.content['application/json'].examples[
      'example-1'
    ].value.vms.map((vm) => vm.metadata.id),
  },
};

export const Disabled: ComponentStoryObj<typeof VmDeleteButton> = {
  args: {
    vms: [],
  },
};
