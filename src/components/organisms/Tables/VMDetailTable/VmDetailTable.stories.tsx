import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Vm } from '@api-hooks/v1/@types';
import schema from '@openapi-spec/v1.json';

import { VMDetailTable } from './VMDetailTable';

export default { component: VMDetailTable } as ComponentMeta<typeof VMDetailTable>;

export const Default: ComponentStoryObj<typeof VMDetailTable> = {
  args: {
    vm: schema.components.responses.GetVMByVMId200Response.content['application/json'].examples['example-1'].value
      .vm as Vm,
  },
};
