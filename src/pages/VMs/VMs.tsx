import { Container, Grid } from '@mui/material';

import { CreateNewVmButton } from '@components/organisms/Buttons';
import { CreateVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu/VmControlMenu';
import { InstanceTable } from '@components/organisms/Tables';
import { DashBoard } from '@templates/DashBoard';

export const VMs = () => (
  <DashBoard>
    <Container>
      <Container>
        <Grid container justifyContent="flex-end" spacing={2}>
          <CreateNewVmButton />
          <VmControlMenu />
        </Grid>
      </Container>
      <Grid container justifyContent="center" alignItems="center">
        <Container>
          <InstanceTable />
        </Container>
        <CreateVmDialog />
      </Grid>
    </Container>
  </DashBoard>
);
