import { InstanceCard, InstanceCardContent } from '@components/molecules/Cards';
import { BarChart, Charts } from '@components/molecules/Charts';

type Props = {
  cpuUsageRate: number;
  memoryUsageRate: number;
  storageUsageRate: number;
};

export const HostStatusCard = (props: Props) => {
  const { cpuUsageRate, memoryUsageRate, storageUsageRate } = props;
  const hostData: Charts = {
    CPU: { value: cpuUsageRate },
    Memory: { value: memoryUsageRate },
    Storage: { value: storageUsageRate },
  };

  return (
    <InstanceCard hasAsideContent={false} title="Host">
      <InstanceCardContent>
        <BarChart data={hostData} />
      </InstanceCardContent>
    </InstanceCard>
  );
};
