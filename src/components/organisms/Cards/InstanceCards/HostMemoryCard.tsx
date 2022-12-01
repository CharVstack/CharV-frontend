import { Grid, Typography, useTheme } from '@mui/material';

import { Memory } from '@api-hooks/v1/@types';
import bgImg from '@assets/images/memory-image.jpg';
import { Card, CardContentBox, CardAsideContentBox } from '@components/molecules/Card';
import { Charts, DoughnutChart, DoughnutChartProps } from '@components/molecules/Charts';
import { calcUnitSize } from '@utils/CalcUnitSize';

export const HostMemoryCard = ({ total: totalMemorySize, used: usedMemorySize }: Pick<Memory, 'total' | 'used'>) => {
  const theme = useTheme();
  const freeVmsColor: string = theme.palette.grey['800'];

  const hostMemoryData: Charts = {
    Used: { value: usedMemorySize },
    Free: { value: totalMemorySize - usedMemorySize, color: freeVmsColor },
  };

  const chartOptions: DoughnutChartProps['options'] = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const [unit, memorySize] = calcUnitSize(context.parsed, 4);
            return `${memorySize} ${unit}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  const [unit, memorySize] = calcUnitSize(totalMemorySize);

  return (
    <Card hasAsideContent title="Memory">
      <CardAsideContentBox bgImg={bgImg}>
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
      </CardAsideContentBox>
      <CardContentBox>
        <DoughnutChart options={chartOptions} data={hostMemoryData} />
      </CardContentBox>
    </Card>
  );
};
