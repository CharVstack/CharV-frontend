import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import schema from '@openapi-spec/v1.json';

import { HostStatusCard } from './HostStatusCard';

export default { component: HostStatusCard } as ComponentMeta<typeof HostStatusCard>;

export const Default: ComponentStoryObj<typeof HostStatusCard> = {
  args: {
    cpuUsageRate: Math.ceil(
      schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host.cpu
        .percent
    ),
    memoryUsageRate: Math.ceil(
      schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host.memory
        .percent
    ),
    storageUsageRate: Math.ceil(
      schema.components.responses.GetHost200Response.content['application/json'].examples[
        'example-1'
      ].value.host.storage_pools.reduce((sum, current) => ({ ...sum, used_size: sum.used_size + current.used_size }))
        .used_size /
        schema.components.responses.GetHost200Response.content['application/json'].examples[
          'example-1'
        ].value.host.storage_pools.reduce((sum, current) => ({
          ...sum,
          total_size: sum.total_size + current.total_size,
        })).total_size
    ),
  },
  parameters: {
    screenshot: {
      delay: 5000,
    },
  },
};
