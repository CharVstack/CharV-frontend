import useAspidaSWR from '@aspida/swr';
import { Box, Container, Grid } from '@mui/material';

import { DashBoardLayout } from '@components/layouts';
import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';
import { apiClient } from '@lib/apiClient';

export const Home = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);
  const { data: vmsData } = useAspidaSWR(apiClient.api.v1.vms);

  const cpuUsageRate = Math.ceil(hostData?.cpu.percent as number);
  const memoryUsageRate = Math.ceil(hostData?.mem.used_percent as number);
  const storageUsageRate = Math.ceil(
    (hostData?.storage_pools?.[0].used_size as number) / (hostData?.storage_pools?.[0].total_size as number)
  );

  return hostData === undefined || vmsData === undefined ? (
    <Box>Loading</Box>
  ) : (
    <DashBoardLayout>
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
            <HostMemoryCard total={hostData.mem.total} used={hostData.mem.used} />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <HostStoragePoolCard {...hostData.storage_pools?.[0]} />
          </Grid>
        </Grid>
      </Container>
    </DashBoardLayout>
  );
};
