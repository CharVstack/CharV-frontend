import { Container, Grid } from '@mui/material';

import { HostMemoryCard, HostStatusCard, HostStoragePoolCard, RunningVmsCard } from '@components/organisms/Cards';

export const Home = () => (
  <Container>
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
  </Container>
);
