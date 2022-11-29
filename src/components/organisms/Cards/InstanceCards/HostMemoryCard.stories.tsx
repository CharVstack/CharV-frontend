import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostMemoryCard } from './HostMemoryCard';

export default { component: HostMemoryCard } as ComponentMeta<typeof HostMemoryCard>;

export const HostMemory: ComponentStoryFn<typeof HostMemoryCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <HostMemoryCard total={hostData.host.memory.total} used={hostData.host.memory.used} />;
};
