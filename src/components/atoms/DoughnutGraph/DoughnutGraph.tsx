import 'chart.js/auto';
import { ChartOptions, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type Props = {
  Label1: string;
  Label2: string;
  Data1: number;
  Data2: number;
};

export const DoughnutGraph = ({ Label1, Label2, Data1, Data2 }: Props) => {
  const data: ChartData<'doughnut'> = {
    labels: [Label1, Label2],
    datasets: [
      {
        label: 'Dataset',
        data: [Data1, Data2],
        backgroundColor: ['#00A056', 'rgba(113,115,117,0.16)'],
        borderColor: ['#00A056', 'rgba(113,115,117,0.16)'],
        borderWidth: 1,
      },
    ],
  };

  const option: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={option} />;
};
