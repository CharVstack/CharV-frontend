import { Box, Grid, Typography, useTheme } from '@mui/material';

import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import bgImg from '@static/memory-image.jpg';

export const HostMemoryCard = () => {
  // ToDo: 消す
  const usedMemory = 22;
  const totalMemory = 32;

  const theme = useTheme();
  const freeVmsColor: string = theme.palette.grey['800'];

  const hostMemoryData: Charts = {
    Used: { value: usedMemory },
    Free: { value: totalMemory - usedMemory, color: freeVmsColor },
  };

  return (
    <InstanceCard title="Memory">
      <Grid container alignItems="stretch" sx={{ height: '100%' }}>
        <Grid item xs={5}>
          <InstanceCardBanner bgImg={bgImg}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h3" component="div">
                {usedMemory}
              </Typography>
            </Box>
          </InstanceCardBanner>
        </Grid>
        <Grid item xs={7}>
          <InstanceCardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '2rem' }}>
              <DoughnutChart data={hostMemoryData} />
            </Box>
          </InstanceCardContent>
        </Grid>
      </Grid>
    </InstanceCard>
  );
};
