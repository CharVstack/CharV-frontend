import { Box, Stack, Typography } from '@mui/material';

import { StoragePool } from '@api-hooks/v1/@types';
import { InstanceCard, InstanceCardContent, InstanceCardAsideContent } from '@components/molecules/Cards';
import bgImg from '@static/pool-image.jpg';
import { calcUnitSize } from '@utils/CalcUnitSize';

const AsideContent = (props: Pick<StoragePool, 'total_size' | 'name' | 'status'>) => {
  const { total_size: totalPoolSize, name: poolName, status: poolStatus } = props;
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

const CardContent = (props: Pick<StoragePool, 'total_size' | 'used_size' | 'path'>) => {
  const { total_size: totalPoolSize, used_size: usedPoolSize, path: poolLocationPath } = props;
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

export const HostStoragePoolCard = (props: StoragePool) => {
  const storageData: StoragePool = props;
  return (
    // prettier-ignore
    <InstanceCard hasAsideContent={true} title="Pool">
      <InstanceCardAsideContent bgImg={bgImg}>
        <AsideContent total_size={storageData.total_size} name={storageData.name} status={storageData.status} />
      </InstanceCardAsideContent>
      <InstanceCardContent>
        <CardContent total_size={storageData.total_size} used_size={storageData.used_size} path={storageData.path} />
      </InstanceCardContent>
    </InstanceCard>
  );
};
