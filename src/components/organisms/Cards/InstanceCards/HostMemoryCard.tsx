import { Grid, Typography, useTheme } from '@mui/material';

import { Memory } from '@api-hooks/v1/@types';
import { InstanceCard, InstanceCardContent, InstanceCardAsideContent } from '@components/molecules/Cards';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import bgImg from '@assets/images/memory-image.jpg';
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
    <InstanceCard hasAsideContent title="Memory">
      <InstanceCardAsideContent bgImg={bgImg}>
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
      </InstanceCardAsideContent>
      <InstanceCardContent>
        <DoughnutChart data={hostMemoryData} />
      </InstanceCardContent>
    </InstanceCard>
  );
};
