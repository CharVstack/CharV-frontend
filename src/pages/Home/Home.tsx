import { Grid } from '@mui/material';

import { Head } from '@components/atoms/Head';
import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';

export const Home = () => (
  <>
    <Head title="Home" />
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      <Grid item xs={12} sm={8} md={6}>
        <RunningVmsCard />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <HostStatusCard />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <HostMemoryCard />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <HostStoragePoolCard />
      </Grid>
    </Grid>
  </>
);
