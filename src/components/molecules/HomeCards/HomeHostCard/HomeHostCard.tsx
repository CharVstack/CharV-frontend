import { Cpu, Memory, Storagepool } from '@api-hooks/v1/@types';
import { H3 } from '@components/atoms/Heading';
import { HorizontalBarGraph } from '@components/atoms/HorizontalBarGraph';

import { Card } from '../Styles/Card';

import { HostBlock, HostTitle, HostInfo, HostFoot } from './Styles/main';

type Props = {
  cpuMetrics: Cpu;
  memoryMetrics: Memory;
  storagePoolMetrics: Storagepool;
};

export const HomeHostCard = ({ cpuMetrics, memoryMetrics, storagePoolMetrics }: Props) => {
  console.log(cpuMetrics.cpu);

  return memoryMetrics.used === undefined ||
    memoryMetrics.total === undefined ||
    storagePoolMetrics.used_size === undefined ||
    storagePoolMetrics.total_size === undefined ? (
    <p>Loading</p>
  ) : (
    <Card>
      <HostBlock>
        <HostTitle>
          <H3>Host</H3>
        </HostTitle>

        <HostInfo>
          <HorizontalBarGraph
            CPUMetrics={0.4}
            MemoryMetrics={memoryMetrics.used / memoryMetrics.total}
            StorageMetrics={storagePoolMetrics.used_size / storagePoolMetrics.total_size}
          />
        </HostInfo>

        <HostFoot />
      </HostBlock>
    </Card>
  );
};
