import { Grid, Typography, useTheme } from '@mui/material';

import { InstanceCard, InstanceCardContent, InstanceCardAsideContent } from '@components/molecules/Cards';
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
    // prettier-ignore
    <InstanceCard hasAsideContent={true} title="VM">
      <InstanceCardAsideContent bgImg={bgImg}>
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
      </InstanceCardAsideContent>
      <InstanceCardContent>
        <DoughnutChart data={vmsData} />
      </InstanceCardContent>
    </InstanceCard>
  );
};
