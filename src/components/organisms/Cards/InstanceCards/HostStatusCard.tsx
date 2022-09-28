import { Box } from '@mui/material';

import { InstanceCard, InstanceCardContent } from '@components/molecules/Cards';
import { BarChart } from '@components/molecules/Charts';

export const HostStatusCard = () => {
  const hostData = { CPU: { value: 20 }, Memory: { value: 30 }, Storage: { value: 40 } };

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
