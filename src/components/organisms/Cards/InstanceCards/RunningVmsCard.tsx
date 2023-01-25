import { getSWRDefaultKey } from '@aspida/swr';
import { Grid, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import useSWR from 'swr';

import { useAllVms } from '@aspida/v1';
import bgImg from '@assets/images/host-image.jpg';
import { Card, CardContentBox, CardAsideContentBox } from '@components/molecules/Card';
import { Charts, DoughnutChart } from '@components/molecules/Charts';
import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

export type RunningVmsCardProps = {
  allVms?: number;
  runningVms?: number;
};

export const RunningVmsCard = () => {
  const { data: vmsData } = useAllVms();
  const vmIds = useMemo(() => vmsData?.vms.map((vm) => vm.metadata.id), [vmsData]);
  const vmKeys = useMemo(() => vmIds?.map((vmId) => getSWRDefaultKey(apiClient.api.v1.vms._vmId(vmId))), [vmIds]);

  const { data: vmsPowerData } = useSWR(
    vmKeys,
    () => vmIds && Promise.all(vmIds.map((vmId) => apiClient.api.v1.vms._vmId(vmId).power.get()))
  );

  const runningVms = vmsPowerData?.filter((vm) => vm.body.vm_power.state === 'RUNNING') ?? [];

  return <BaseRunningVmsCard allVms={vmIds?.length} runningVms={runningVms?.length} />;
};

export const BaseRunningVmsCard = ({ allVms, runningVms }: RunningVmsCardProps) => {
  const theme = useTheme();
  const stoppedVmsColor: string = theme.palette.grey['800'];

  if (allVms === undefined || runningVms === undefined) {
    return <LoadingSpinner open />;
  }

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
