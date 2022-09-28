import 'chart.js/auto';
import { useTheme } from '@mui/material';
import { ChartOptions, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Charts } from '../types/types';

export const DoughnutChart = ({ data }: { data: Charts }) => {
  const theme = useTheme();
  const defaultColor: string = theme.palette.success.main;

  const chartData: ChartData<'doughnut'> = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data).map((i) => i.value),
        backgroundColor: Object.values(data).map((x) => x.color ?? defaultColor),
        borderWidth: 0,
      },
    ],
  };

  const chartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};
