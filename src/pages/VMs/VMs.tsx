import { Container, Box } from '@mui/material';

import { Head } from '@components/atoms/Head';
import { CreateNewVmButton, DeleteVmsButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmsControlMenu } from '@components/organisms/Menu';
import { InstanceTable } from '@components/organisms/Tables';

export const VMs = () => (
  <>
    <Head title="VM一覧" />
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'right', gap: '1vw', pb: '1vh' }}>
        <CreateNewVmButton />
        <VmsControlMenu />
        <DeleteVmsButton />
      </Box>
      <InstanceTable />
    </Container>
    <CreateVmDialog />
  </>
);
