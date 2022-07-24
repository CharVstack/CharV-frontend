import useAspidaSWR from '@aspida/swr';
import { Grid } from '@mui/material';

import { HomeHostCard } from '@components/molecules/HomeCards/HomeHostCard';
import { HomeInstanceCard } from '@components/molecules/HomeCards/HomeInstanceCard';
import { HomeMemoryCard } from '@components/molecules/HomeCards/HomeMemoryCard';
import { HomePoolCard } from '@components/molecules/HomeCards/HomePoolCard';
import { apiClient } from '@lib/apiClient';

export const Home = () => {
  const { data: hostData } = useAspidaSWR(apiClient.host, {});
  const { data: vmData } = useAspidaSWR(apiClient.vms, {});

  if (vmData === undefined || hostData === undefined) {
    return <p>Loading ...</p>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <HomeInstanceCard Vms={vmData.vms} />
      </Grid>
      <Grid item xs={6}>
        <HomeHostCard />
      </Grid>
      <Grid item xs={6}>
        <HomeMemoryCard MemoryMetrics={hostData.mem} />
      </Grid>
      <Grid item xs={6}>
        <HomePoolCard />
      </Grid>
    </Grid>
  );
};
