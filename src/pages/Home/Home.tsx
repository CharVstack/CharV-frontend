import useAspidaSWR from '@aspida/swr';
import { Box, Container, Grid } from '@mui/material';

import { DashBoardLayout } from '@components/layouts';
import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';
import { apiClient } from '@lib/apiClient';

export const Home = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);
  const { data: vmsData } = useAspidaSWR(apiClient.api.v1.vms);

  const storageUsageRate = Math.ceil(
    (hostData?.storage_pools?.[0].used_size as number) / (hostData?.storage_pools?.[0].total_size as number)
  );

  return hostData === undefined || vmsData === undefined ? (
    <Box>Loading</Box>
  ) : (
    <DashBoardLayout>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            {/* APIができていないため仮の値を指定 */}
            {/* ToDo: API叩いてデータ受け取るように */}
            <RunningVmsCard allVms={20} runningVms={16} />
          </Grid>
          <Grid item xs={6}>
            <HostStatusCard
              cpuUsageRate={hostData.cpu.percent}
              memoryUsageRate={hostData.mem.used_percent}
              storageUsageRate={storageUsageRate}
            />
          </Grid>
          <Grid item xs={6}>
            <HostMemoryCard total={hostData.mem.total} used={hostData.mem.used} />
          </Grid>
          <Grid item xs={6}>
            <HostStoragePoolCard {...hostData.storage_pools?.[0]} />
          </Grid>
        </Grid>
      </Container>
    </DashBoardLayout>
  );
};
