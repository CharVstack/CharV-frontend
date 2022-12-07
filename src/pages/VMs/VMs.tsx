import useAspidaSWR from '@aspida/swr';
import { Container } from '@mui/material';

import { LoadingSpinner } from '@components/molecules/Progress';
import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { InstanceTable } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';
import { DashBoard } from '@templates/DashBoard';

export const VMs = () => {
  const { data } = useAspidaSWR(apiClient.api.v1.vms);

  if (data === undefined) {
    return <LoadingSpinner open />;
  }

  return (
    <DashBoard>
      <CreateNewVmButton />
      <Container>
        <InstanceTable vms={data.vms} />
      </Container>
      <CreateVmDialog />
    </DashBoard>
  );
};
