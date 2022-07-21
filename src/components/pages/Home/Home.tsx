import { HomeInstanceCard } from '@components/molecules/HomeCards/HomeInstanceCard';
import { HomeHostCard } from '@components/molecules/HomeCards/HomeHostCard';
import { HomeMemoryCard } from '@components/molecules/HomeCards/HomeMemoryCard';
import { HomePoolCard } from '@components/molecules/HomeCards/HomePoolCard';
import { Grid } from '@mui/material';

import useAspidaSWR from '@aspida/swr';
import { apiClient } from '@lib/apiClient';

export const Home = () => {
  const { data: hostData, error: hostError } = useAspidaSWR(apiClient.host, {});

  const { data: vmData, error: vmError } = useAspidaSWR(apiClient.vms, {});

  if (!vmError) {
    console.log(vmError);
  }

  if (!hostError) {
    console.log(hostError);
  }

  if (vmData == undefined || hostData == undefined) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <HomeInstanceCard Vms={vmData.vms} />
        </Grid>
        <Grid item xs={6}>
          <HomeHostCard />
        </Grid>
        <Grid item xs={6}>
          <HomeMemoryCard Memory={hostData.mem} />
        </Grid>
        <Grid item xs={6}>
          <HomePoolCard />
        </Grid>
      </Grid>
    </>
  );
};
