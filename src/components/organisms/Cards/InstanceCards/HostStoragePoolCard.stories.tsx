import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import schema from '@openapi-spec/v1.json';

import { HostStoragePoolCard } from './HostStoragePoolCard';

export default { component: HostStoragePoolCard } as ComponentMeta<typeof HostStoragePoolCard>;

export const Default: ComponentStoryObj<typeof HostStoragePoolCard> = {
  args: {
    path: schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
      .storage_pools[0].path,
    name: schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
      .storage_pools[0].name,
    total_size:
      schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
        .storage_pools[0].total_size,
    used_size:
      schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
        .storage_pools[0].used_size,
    status: schema.components.responses.GetHost200Response.content['application/json'].examples['example-1'].value.host
      .storage_pools[0].status as 'ACTIVE',
  },
};
