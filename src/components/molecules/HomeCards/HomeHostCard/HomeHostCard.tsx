import Stack from '@mui/material/Stack';

import { Cpu, Memory, Storage_pool } from '@api-hooks/v1/@types';
import { H3, H4 } from '@components/atoms/Heading';
import { HorizontalBarGraph } from '@components/atoms/HorizontalBarGraph';

import { Card } from '../Styles/Card';

import { HostBlock, HostTitle, HostInfo, HostInfoString, HostInfoGraph, HostFoot } from './Styles/main';

type Props = {
  cpuMetrics: Cpu;
  memoryMetrics: Memory;
  storagePoolMetrics: Storage_pool;
};

export const HomeHostCard = ({ cpuMetrics, memoryMetrics, storagePoolMetrics }: Props) => {
  const usedMemory = memoryMetrics.used;
  const totalMemory = memoryMetrics.total;

  if (usedMemory === undefined || totalMemory === undefined || storagePoolMetrics === undefined) {
    return <p>Loading</p>;
  }

  return (
    <Card>
      <HostBlock>
        <HostTitle>
          <H3>Host</H3>
        </HostTitle>

        <HostInfo>
          <HostInfoString>
            <Stack sx={{ width: '95%', color: 'grey.500' }} spacing={0}>
              <H4>CPU</H4>
              <H4>Memory</H4>
              <H4>Storage</H4>
            </Stack>
          </HostInfoString>

          <HostInfoGraph>
            <Stack sx={{ width: '95%', color: 'grey.500' }} spacing={4}>
              <HorizontalBarGraph CPUMetrics={0.4} MemoryMetrics={0.5} StorageMetrics={0.9} />
            </Stack>
          </HostInfoGraph>
        </HostInfo>

        <HostFoot />
      </HostBlock>
    </Card>
  );
};
