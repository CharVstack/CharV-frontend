import useAspidaSWR from '@aspida/swr';
import { Container, Grid } from '@mui/material';

import { LoadingSpinner } from '@components/molecules/Progress';
import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';
import { apiClient } from '@lib/apiClient';
import { DashBoard } from '@templates/DashBoard';

export const Home = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);
  const { data: vmsData } = useAspidaSWR(apiClient.api.v1.vms);

  if (hostData === undefined || vmsData === undefined) {
    return (
      <DashBoard>
        <LoadingSpinner open />
      </DashBoard>
    );
  }

  const cpuUsageRate = Math.ceil(hostData.host.cpu.percent);
  const memoryUsageRate = Math.ceil(hostData.host.memory.percent);
  const storageUsageRate = Math.ceil(
    hostData.host.storage_pools.reduce((sum, current) => ({ ...sum, used_size: sum.used_size + current.used_size }))
      .used_size /
      hostData.host.storage_pools.reduce((sum, current) => ({
        ...sum,
        total_size: sum.total_size + current.total_size,
      })).total_size
  );

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          {/* APIができていないため仮の値を指定 */}
          {/* ToDo: API叩いてデータ受け取るように */}
          <RunningVmsCard allVms={20} runningVms={16} />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <HostStatusCard
            cpuUsageRate={cpuUsageRate}
            memoryUsageRate={memoryUsageRate}
            storageUsageRate={storageUsageRate}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <HostMemoryCard total={hostData.host.memory.total} used={hostData.host.memory.used} />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <HostStoragePoolCard {...hostData.host.storage_pools?.[0]} />
        </Grid>
      </Grid>
    </Container>
  );
};
