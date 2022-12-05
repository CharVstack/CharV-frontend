import { Container } from '@mui/material';

import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { InstanceTable } from '@components/organisms/Tables';
import { DashBoard } from '@templates/DashBoard';

export const VMs = () => (
  <DashBoard>
    <CreateNewVmButton />
    <Container>
      <InstanceTable />
    </Container>
    <CreateVmDialog />
  </DashBoard>
);
