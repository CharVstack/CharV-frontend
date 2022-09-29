import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import { Storage_pool } from '@api-hooks/v1/@types';
import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import bgImg from '@static/pool-image.jpg';

const BannerContent = (props: Pick<Storage_pool, 'total_size' | 'name' | 'status'>) => {
  const { total_size: totalPoolSize, name: poolName, status: poolStatus } = props;

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '2rem' }}>
      <Stack>
        <Typography variant="h4">{poolName}</Typography>
        <Typography>{totalPoolSize}</Typography>
        <Typography>{poolStatus}</Typography>
      </Stack>
    </Container>
  );
};

const CardContent = (props: Pick<Storage_pool, 'total_size' | 'used_size' | 'path'>) => {
  const { total_size: totalPoolSize, used_size: usedPoolSize, path: poolLocationPath } = props;

  return (
    <Container>
      <Stack>
        <Typography noWrap>{poolLocationPath}</Typography>
        <Typography variant="body2">{totalPoolSize - usedPoolSize}</Typography>
      </Stack>
    </Container>
  );
};

export const HostStoragePoolCard = (props: Storage_pool) => {
  const storageData: Storage_pool = props;
  return (
    <InstanceCard title="Pool">
      <Grid container alignItems="stretch" sx={{ height: '100%' }}>
        <Grid item xs={5}>
          <InstanceCardBanner bgImg={bgImg}>
            <BannerContent total_size={storageData.total_size} name={storageData.name} status={storageData.status} />
          </InstanceCardBanner>
        </Grid>
        <Grid item xs={7}>
          <InstanceCardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '1rem' }}>
              <CardContent
                total_size={storageData.total_size}
                used_size={storageData.used_size}
                path={storageData.path}
              />
            </Box>
          </InstanceCardContent>
        </Grid>
      </Grid>
    </InstanceCard>
  );
};
