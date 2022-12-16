import { useTheme } from '@mui/material';
import { ChartOptions, ChartData, Chart, ArcElement, Tooltip, Legend, LinearScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Charts } from '../types/types';

Chart.register(ArcElement, Legend, Tooltip, LinearScale);

export type DoughnutChartProps = {
  data: Charts;
  options?: ChartOptions<'doughnut'>;
};

export const DoughnutChart = ({ data, options }: DoughnutChartProps) => {
  const theme = useTheme();
  const defaultColor: string = theme.palette.success.main;

  const chartData: ChartData<'doughnut'> = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data).map((i) => i.value),
        backgroundColor: Object.values(data).map((i) => i.color ?? defaultColor),
        borderWidth: 0,
      },
    ],
  };

  const defaultOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return <Doughnut data={chartData} options={options ?? defaultOptions} />;
};
