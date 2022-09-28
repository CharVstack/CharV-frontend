import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import bgImg from '@static/pool-image.jpg';

const PoolBanner = () => {
  const poolSize = 64;
  const poolState = 'Active';

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '2rem' }}>
      <Stack>
        <Typography variant="h4">Default</Typography>
        <Typography>{poolSize}</Typography>
        <Typography>{poolState}</Typography>
      </Stack>
    </Container>
  );
};

const PoolContent = () => {
  const poolLocation = '/var/lib/libvirt/images';
  const poolSize = 64;
  const usedSize = 32;

  return (
    <Container>
      <Stack>
        <Typography noWrap>{poolLocation}</Typography>
        <Typography variant="body2">{poolSize - usedSize}</Typography>
      </Stack>
    </Container>
  );
};

export const HostStoragePoolCard = () => (
  <InstanceCard title="Pool">
    <Grid container alignItems="stretch" sx={{ height: '100%' }}>
      <Grid item xs={5}>
        <InstanceCardBanner bgImg={bgImg}>
          <PoolBanner />
        </InstanceCardBanner>
      </Grid>
      <Grid item xs={7}>
        <InstanceCardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '1rem' }}>
            <PoolContent />
          </Box>
        </InstanceCardContent>
      </Grid>
    </Grid>
  </InstanceCard>
);
