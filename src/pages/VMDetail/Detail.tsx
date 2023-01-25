import { Box } from '@mui/material';
import { Suspense } from 'react';

import { useVmByVmId } from '@aspida/v1';
import { Head } from '@components/atoms/Head';
import { Loading } from '@components/atoms/Loading';
import { ConsoleButton, DeleteVmButton, EditVmButton } from '@components/organisms/Buttons';
import { EditVmDialog } from '@components/organisms/Dialogs';
import { VmControlMenu } from '@components/organisms/Menu';
import { VMDetailTable } from '@components/organisms/Tables';

type Props = {
  vmId: string;
};

export const VmDetail = ({ vmId }: Props) => {
  const { data } = useVmByVmId(vmId);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', gap: '1vw', pb: '1vh' }}>
        <ConsoleButton vmId={vmId} />
        <EditVmButton />
        <VmControlMenu vmId={vmId} />
        <DeleteVmButton vmId={vmId} />
      </Box>
      <Head title={data.vm.name} />
      <VMDetailTable vm={data.vm} />
      <Suspense>
        <EditVmDialog vmId={vmId} />
      </Suspense>
    </>
  );
};
