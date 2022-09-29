import { Box, Grid, Typography, useTheme } from '@mui/material';

import { Memory } from '@api-hooks/v1/@types';
import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import bgImg from '@static/memory-image.jpg';
import { calcUnitSize } from '@utils/CalcUnitSize';

export const HostMemoryCard = (props: Pick<Memory, 'total' | 'used'>) => {
  const { total: totalMemorySize, used: usedMemorySize } = props;

  const theme = useTheme();
  const freeVmsColor: string = theme.palette.grey['800'];

  const hostMemoryData: Charts = {
    Used: { value: usedMemorySize },
    Free: { value: totalMemorySize - usedMemorySize, color: freeVmsColor },
  };

  const [unit, memorySize] = calcUnitSize(totalMemorySize);

  return (
    <InstanceCard title="Memory">
      <Grid container alignItems="stretch" sx={{ height: '100%' }}>
        <Grid item xs={5}>
          <InstanceCardBanner bgImg={bgImg}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid container justifyContent="center" alignItems="flex-end">
                <Grid item>
                  <Typography variant="h3" component="div">
                    {memorySize}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>{unit}</Typography>
                </Grid>
              </Grid>
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
