import { Box, Grid, Stack, Typography } from '@mui/material';

import { StoragePool } from '@api-hooks/v1/@types';
import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import bgImg from '@static/pool-image.jpg';
import { calcUnitSize } from '@utils/CalcUnitSize';

const BannerContent = (props: Pick<StoragePool, 'total_size' | 'name' | 'status'>) => {
  const { total_size: totalPoolSize, name: poolName, status: poolStatus } = props;
  const [unit, poolSize] = calcUnitSize(totalPoolSize);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', textAlign: 'center' }}>
      <Stack sx={{ margin: '0 auto' }}>
        <Typography variant="h3">{poolName}</Typography>
        <Typography>
          Size: {poolSize} {unit}
        </Typography>
        <Typography>State: {poolStatus}</Typography>
      </Stack>
    </Box>
  );
};

const CardContent = (props: Pick<StoragePool, 'total_size' | 'used_size' | 'path'>) => {
  const { total_size: totalPoolSize, used_size: usedPoolSize, path: poolLocationPath } = props;
  const [unit, poolSize] = calcUnitSize(totalPoolSize - usedPoolSize);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} textAlign={'center'}>
        <Typography>Path: {poolLocationPath}</Typography>
        <Typography>
          Free: {poolSize} {unit}
        </Typography>
      </Stack>
    </Box>
  );
};

export const HostStoragePoolCard = (props: StoragePool) => {
  const storageData: StoragePool = props;
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
