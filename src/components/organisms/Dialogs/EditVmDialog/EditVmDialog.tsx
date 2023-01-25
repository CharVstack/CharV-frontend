import { getSWRDefaultKey } from '@aspida/swr';
import { Button, DialogActions, DialogTitle } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState, useCallback, Suspense, lazy } from 'react';
import { FormProvider } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

import { PatchUpdateVMRequest } from '@api-hooks/v1/@types';
import { UpdateVmForm, useUpdateVmForm, useUpdateVmFormContext } from '@components/organisms/Forms';
import {
  InstanceTabs,
  useIncInstanceTabs,
  useWritableInstanceTabs,
  useDecInstanceTabs,
} from '@components/organisms/Tabs';
import { apiClient } from '@lib/apiClient';
import { useIsProduction } from '@lib/isProduction';
import { DevToolType } from '@utils/devtools/HookForm';

import { DialogWithAtoms as Dialog } from '../DialogWithAtoms';

import { updateVmDialogAtom, useWriteOnlyUpdateVmDialog } from './atoms';

export const EditVmDialog = ({ vmId }: { vmId: string }) => {
  const methods = useUpdateVmForm(vmId);
  const isProduction = useIsProduction();
  const DevTool = lazy(() => import('@utils/devtools/HookForm')) as DevToolType;

  return (
    <>
      <FormProvider {...methods}>
        <BaseEditVmDialog vmId={vmId} />
      </FormProvider>

      {!isProduction && (
        <Suspense>
          <DevTool control={methods.control} />
        </Suspense>
      )}
    </>
  );
};

/**
 * @package
 */
export const BaseEditVmDialog = ({ vmId }: { vmId: string }) => {
  const {
    reset,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useUpdateVmFormContext();

  const { trigger } = useSWRMutation<void, Error, string[], PatchUpdateVMRequest>(
    getSWRDefaultKey(apiClient.api.v1.vms._vmId(vmId)),
    (_, { arg }) =>
      apiClient.api.v1.vms
        ._vmId(vmId)
        .$patch({ body: arg })
        .then(() => {
          enqueueSnackbar('新規仮想マシンの変更に成功しました!', { variant: 'success' });
          handleClose();
          setOpen(false);
        })
        .catch(() => {
          enqueueSnackbar('新規仮想マシンの変更に失敗しました!', { variant: 'error' });
          handleClose();
          setOpen(false);
        })
  );

  const [currentTab, setCurrentTab] = useWritableInstanceTabs();

  const nextTab = useIncInstanceTabs();
  const prevTab = useDecInstanceTabs();

  const setOpen = useWriteOnlyUpdateVmDialog();

  const { enqueueSnackbar } = useSnackbar();

  const [isConfirm, setIsConfirm] = useState(false);

  const handleClose = useCallback(() => {
    reset();
    setCurrentTab(0);
    setIsConfirm(false);
  }, [reset, setCurrentTab]);

  // POST Req
  const finish = (body: PatchUpdateVMRequest) => trigger(body);

  // Dialog Actions
  const next = useCallback(() => {
    nextTab();
    setIsConfirm(true);
  }, [nextTab]);

  const back = useCallback(() => {
    prevTab();
    setIsConfirm(false);
  }, [prevTab]);

  const cancel = useCallback(() => {
    setOpen(false);
    handleClose();
  }, [setOpen, handleClose]);

  return (
    <Dialog onClose={handleClose} atom={updateVmDialogAtom}>
      <DialogTitle>新規仮想マシンの作成</DialogTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <InstanceTabs setIsConfirm={setIsConfirm}>
          <UpdateVmForm isConfirm={isConfirm} />
        </InstanceTabs>
        <DialogActions>
          <Button onClick={back} disabled={currentTab === 0}>
            BACK
          </Button>
          <Button onClick={next} disabled={currentTab === 1 || !isDirty || !isValid}>
            NEXT
          </Button>
          <Button onClick={handleSubmit(finish)} disabled={currentTab !== 1}>
            FINISH
          </Button>
          <Button onClick={cancel}>CANCEL</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
