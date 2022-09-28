import { Box, Grid, Typography, useTheme } from '@mui/material';

import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import bgImg from '@static/host-image.jpg';

export const RunningVmsCard = () => {
  // ToDo: 消す
  const runningVms = 12;
  const allVms = 20;

  const theme = useTheme();
  const freeVmsColor: string = theme.palette.grey['800'];

  const vmsData: Charts = {
    Used: { value: runningVms },
    Free: { value: allVms - runningVms, color: freeVmsColor },
  };

  return (
    <InstanceCard title="VM">
      <Grid container alignItems="stretch" sx={{ height: '100%' }}>
        <Grid item xs={5}>
          <InstanceCardBanner bgImg={bgImg}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h3" component="div">
                {runningVms}
              </Typography>
            </Box>
          </InstanceCardBanner>
        </Grid>
        <Grid item xs={7}>
          <InstanceCardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', padding: '2rem' }}>
              <DoughnutChart data={vmsData} />
            </Box>
          </InstanceCardContent>
        </Grid>
      </Grid>
    </InstanceCard>
  );
};
