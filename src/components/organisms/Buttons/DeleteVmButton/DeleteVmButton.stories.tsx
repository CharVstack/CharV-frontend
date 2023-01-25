import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import schema from '@openapi-spec/v1.json';

import { BaseDeleteVmButton as DeleteVmButton } from './DeleteVmButton';

export default { component: DeleteVmButton } as ComponentMeta<typeof DeleteVmButton>;

export const Default: ComponentStoryObj<typeof DeleteVmButton> = {
  args: {
    vms: schema.components.responses.GetAllVMsList200Response.content['application/json'].examples[
      'example-1'
    ].value.vms.map((vm) => vm.metadata.id),
  },
};

export const Disabled: ComponentStoryObj<typeof DeleteVmButton> = {
  args: {
    vms: [],
  },
};
