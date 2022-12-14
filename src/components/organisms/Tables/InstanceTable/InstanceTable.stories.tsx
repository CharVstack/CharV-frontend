import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Vm } from '@api-hooks/v1/@types';
import schema from '@openapi-spec/v1.json';

import { InstanceTable } from './InstanceTable';

export default { component: InstanceTable } as ComponentMeta<typeof InstanceTable>;

export const Default: ComponentStoryObj<typeof InstanceTable> = {
  args: {
    vms: [],
  },
};

export const Running: ComponentStoryObj<typeof InstanceTable> = {
  args: {
    vms: [
      ...(schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
        .vms as Vm[]),
    ],
  },
};
