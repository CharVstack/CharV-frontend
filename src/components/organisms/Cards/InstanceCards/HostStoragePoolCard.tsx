import { Box, Stack, Typography } from '@mui/material';

import { StoragePool } from '@api-hooks/v1/@types';
import bgImg from '@assets/images/pool-image.jpg';
import { Card, CardContentBox, CardAsideContentBox } from '@components/molecules/Card';
import { calcUnitSize } from '@utils/CalcUnitSize';

const AsideContent = ({
  total_size: totalPoolSize,
  name: poolName,
  status: poolStatus,
}: Pick<StoragePool, 'total_size' | 'name' | 'status'>) => {
  const [unit, poolSize] = calcUnitSize(totalPoolSize);

  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Stack sx={{ m: '0 auto' }}>
        <Typography variant="h3">{poolName}</Typography>
        <Typography>
          Size: {poolSize} {unit}
        </Typography>
        <Typography>State: {poolStatus}</Typography>
      </Stack>
    </Box>
  );
};

const CardContent = ({
  total_size: totalPoolSize,
  used_size: usedPoolSize,
  path: poolLocationPath,
}: Pick<StoragePool, 'total_size' | 'used_size' | 'path'>) => {
  const [unit, poolSize] = calcUnitSize(totalPoolSize - usedPoolSize);

  return (
    <Box width="100%">
      <Stack spacing={2} textAlign="center">
        <Typography>Path: {poolLocationPath}</Typography>
        <Typography>
          Free: {poolSize} {unit}
        </Typography>
      </Stack>
    </Box>
  );
};

export const HostStoragePoolCard = (storagePool: StoragePool) => (
  <Card hasAsideContent title="Pool">
    <CardAsideContentBox bgImg={bgImg}>
      <AsideContent {...storagePool} />
    </CardAsideContentBox>
    <CardContentBox>
      <CardContent {...storagePool} />
    </CardContentBox>
  </Card>
);
