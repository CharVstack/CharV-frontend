import { Box } from '@mui/material';

import { InstanceCard, InstanceCardContent } from '@components/molecules/Cards';
import { BarChart } from '@components/molecules/Charts';

type Props = {
  cpuUsageRate: number;
  memoryUsageRate: number;
  storageUsageRate: number;
};

export const HostStatusCard = (props: Props) => {
  const { cpuUsageRate, memoryUsageRate, storageUsageRate } = props;
  const hostData = {
    CPU: { value: cpuUsageRate },
    Memory: { value: memoryUsageRate },
    Storage: { value: storageUsageRate },
  };

  return (
    <InstanceCard title="Host">
      <Box sx={{ padding: '2rem', height: '100%' }}>
        <InstanceCardContent>
          <BarChart data={hostData} />
        </InstanceCardContent>
      </Box>
    </InstanceCard>
  );
};
