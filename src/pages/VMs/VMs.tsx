import { Container, Stack } from '@mui/material';

import { VmDeleteButton } from '@components/molecules/Buttons';
import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu/VmControlMenu';
import { InstanceTable } from '@components/organisms/Tables';
import { DashBoard } from '@templates/DashBoard';

export const VMs = () => (
  <DashBoard>
    <Container>
      <Stack sx={{ mb: 1 }} direction="row" spacing={1} justifyContent="end">
        <CreateNewVmButton />
        <VmControlMenu />
        <VmDeleteButton />
      </Stack>
      <InstanceTable />
    </Container>
    <CreateVmDialog />
  </DashBoard>
);
