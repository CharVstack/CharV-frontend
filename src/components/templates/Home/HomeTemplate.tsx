import { Container, Grid } from '@mui/material';

import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';

export const HomeTemplate = () => (
  <Container>
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <RunningVmsCard />
      </Grid>
      <Grid item xs={6}>
        <HostStatusCard />
      </Grid>
      <Grid item xs={6}>
        <HostMemoryCard />
      </Grid>
      <Grid item xs={6}>
        <HostStoragePoolCard />
      </Grid>
    </Grid>
  </Container>
);
