import useAspidaSWR from '@aspida/swr';
import { Container, Stack } from '@mui/material';
import { SWRResponse } from 'swr';

import { Vm } from '@api-hooks/v1/@types';
import { LoadingSpinner } from '@components/molecules/Progress';
import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu/VmControlMenu';
import { HookErrorDialog } from '@components/organisms/Dialogs/HookError/HookErrorDialog';
import { InstanceTable } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';
import { DashBoard } from '@templates/DashBoard';

export const VMs = () => {
  const { data, error } = useAspidaSWR(apiClient.api.v1.vms) as SWRResponse<{ vms: Vm[] }, Error>;

  if (data === undefined) {
    if (error) {
      return (
        <Stack>
          <HookErrorDialog message="Could not retrieve VM information" />
          <LoadingSpinner open />
        </Stack>
      );
    }
    return <LoadingSpinner open />;
  }

  return (
    <DashBoard>
      <Container>
        <Stack direction="row" spacing={1} justifyContent="end">
          <CreateNewVmButton />
          <VmControlMenu />
        </Stack>
        <InstanceTable vms={data.vms} />
      </Container>
      <CreateVmDialog />
    </DashBoard>
  );
};
