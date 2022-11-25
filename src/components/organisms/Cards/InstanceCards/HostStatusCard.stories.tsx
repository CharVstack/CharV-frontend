import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { apiClient } from '@lib/apiClient';

import { HostStatusCard } from './HostStatusCard';

export default { component: HostStatusCard } as ComponentMeta<typeof HostStatusCard>;

export const HostStatus: ComponentStoryFn<typeof HostStatusCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  const cpuUsageRate = Math.ceil(hostData?.host?.cpu.percent as number);
  const memoryUsageRate = Math.ceil(hostData?.host.memory.percent as number);
  const storageUsageRate = Math.ceil(
    (hostData?.host.storage_pools?.[0].used_size as number) / (hostData?.host.storage_pools?.[0].total_size as number)
  );

  return (
    <HostStatusCard cpuUsageRate={cpuUsageRate} memoryUsageRate={memoryUsageRate} storageUsageRate={storageUsageRate} />
  );
};
