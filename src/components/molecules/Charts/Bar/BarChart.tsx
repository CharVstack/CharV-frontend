import { useTheme } from '@mui/material';
import { ChartOptions, ChartData, BarElement, Chart, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Charts } from '../types';

Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export type BarChartProps = {
  data: Charts;
  options?: ChartOptions<'bar'>;
};

export const BarChart = ({ data, options }: BarChartProps) => {
  const theme = useTheme();
  const defaultColor: string = theme.palette.success.main;

  const chartData: ChartData<'bar'> = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data).map((i) => i.value),
        backgroundColor: Object.values(data).map((i) => i.color ?? defaultColor),
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const defaultOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      xAxes: {
        display: false,
        max: 100,
        min: 0,
      },
      yAxes: {
        display: false,
        ticks: {
          font: {
            size: theme.typography.fontSize,
          },
          color: theme.palette.text.primary,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options ?? defaultOptions} />;
};
