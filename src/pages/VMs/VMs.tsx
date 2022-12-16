import { Container, Stack } from '@mui/material';

import { DeleteVmButton } from '@components/molecules/Buttons';
import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu/VmControlMenu';
import { InstanceTable } from '@components/organisms/Tables';

export const VMs = () => (
  <>
    <Container>
      <Stack sx={{ mb: 1 }} direction="row" spacing={1} justifyContent="end">
        <CreateNewVmButton />
        <VmControlMenu />
        <DeleteVmButton />
      </Stack>
      <InstanceTable />
    </Container>
    <CreateVmDialog />
  </>
);
