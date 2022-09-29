import { Box, Grid, Typography, useTheme } from '@mui/material';

import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import bgImg from '@static/host-image.jpg';

export const RunningVmsCard = ({ allVms, runningVms }: { allVms: number; runningVms: number }) => {
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
              <Grid container justifyContent="center" alignItems="flex-end">
                <Grid item>
                  <Typography variant="h3" component="div">
                    {runningVms}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>VMs</Typography>
                </Grid>
              </Grid>
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
