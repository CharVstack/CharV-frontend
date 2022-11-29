import { Grid, Typography, useTheme } from '@mui/material';

import bgImg from '@assets/images/host-image.jpg';
import { Card, CardContentBox, CardAsideContentBox } from '@components/molecules/Card';
import { Charts, DoughnutChart } from '@components/molecules/Charts';

export type RunningVmsCardProps = {
  allVms: number;
  runningVms: number;
};

export const RunningVmsCard = ({ allVms, runningVms }: RunningVmsCardProps) => {
  const theme = useTheme();
  const stoppedVmsColor: string = theme.palette.grey['800'];

  const vmsData: Charts = {
    running: { value: runningVms },
    stopped: { value: allVms - runningVms, color: stoppedVmsColor },
  };

  return (
    <Card hasAsideContent title="VM">
      <CardAsideContentBox bgImg={bgImg}>
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
      </CardAsideContentBox>
      <CardContentBox>
        <DoughnutChart data={vmsData} />
      </CardContentBox>
    </Card>
  );
};
