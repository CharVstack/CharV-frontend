import { Container, Box } from '@mui/material';

import { Head } from '@components/atoms/Head';
import { DeleteVmButton, CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu/VmControlMenu';
import { InstanceTable } from '@components/organisms/Tables';

export const VMs = () => (
  <>
    <Head title="VM一覧" />
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'right', gap: '1vw', pb: '1vh' }}>
        <CreateNewVmButton />
        <VmControlMenu />
        <DeleteVmButton />
      </Box>
      <InstanceTable />
    </Container>
    <CreateVmDialog />
  </>
);
