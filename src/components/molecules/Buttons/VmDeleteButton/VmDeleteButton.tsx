import { getSWRDefaultKey } from '@aspida/swr';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { mutate } from 'swr';

import { useSelectedVmReadOnlyAtom } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';

const useDeleteHandler = (vms: string[]) => {
  const deleteHandler = useCallback(async () => {
    await Promise.all(
      vms.map(async (vm) => {
        await apiClient.api.v1.vms
          ._vmId(vm)
          .$delete()
          .then(async () => {
            await mutate(getSWRDefaultKey(apiClient.api.v1.vms));
          });
      })
    );
  }, [vms]);
  return deleteHandler;
};

export const VmDeleteButton = () => {
  const vms = useSelectedVmReadOnlyAtom();
  return <BaseVmDeleteButton vms={vms} />;
};

export const BaseVmDeleteButton = ({ vms }: { vms: string[] }) => {
  const handleDelete = useDeleteHandler(vms);
  return (
    <Button disabled={vms.length === 0} variant="contained" color="error" onClick={handleDelete}>
      DELETE
    </Button>
  );
};
