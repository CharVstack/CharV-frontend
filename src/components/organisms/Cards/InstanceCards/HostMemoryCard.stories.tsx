import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import schema from '@openapi-spec/v1.json';

import { HostMemoryCard } from './HostMemoryCard';

export default { component: HostMemoryCard } as ComponentMeta<typeof HostMemoryCard>;

export const Default: ComponentStoryObj<typeof HostMemoryCard> = {
  args: {
    total:
      schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host.memory
        .total,
    used: schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
      .memory.used,
  },
  parameters: {
    screenshot: {
      delay: 5000,
    },
  },
};
