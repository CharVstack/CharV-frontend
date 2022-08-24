import 'chart.js/auto';
import { ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {
  cpuMetrics: number;
  memoryMetrics: number;
  storageMetrics: number;
};

export const HorizontalBarGraph = ({ cpuMetrics, memoryMetrics, storageMetrics }: Props) => {
  const data: ChartData<'bar'> = {
    labels: ['CPU', 'Memory', 'Storage'],

    datasets: [
      {
        data: [cpuMetrics, memoryMetrics, storageMetrics],
        backgroundColor: ['#00A056'],
        barPercentage: 0.4,
        categoryPercentage: 0.8,
      },
    ],
  };

  const option: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      xAxes: {
        display: false,
      },
      yAxes: {
        display: true,
        ticks: {
          font: {
            size: 24,
          },
          color: '#DBDBDB',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={option} />;
};
