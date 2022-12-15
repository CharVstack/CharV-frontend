import { getSWRDefaultKey } from '@aspida/swr';
import { DevTool } from '@hookform/devtools'; // eslint-disable-line import/no-extraneous-dependencies
import { Button, DialogActions, DialogTitle } from '@mui/material';
import { atom, useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useSnackbar } from 'notistack';
import { useState, useCallback } from 'react';
import { FormProvider } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

import { PostCreateNewVMRequest } from '@api-hooks/v1/@types';
import { CreateVmForm, useCreateVmForm, useCreateVmFormContext } from '@components/organisms/Forms';
import {
  InstanceTabs,
  useIncInstanceTabs,
  useWritableInstanceTabs,
  useDecInstanceTabs,
} from '@components/organisms/Tabs';
import { apiClient } from '@lib/apiClient';
import { useIsProduction } from '@lib/isProduction';

import { DialogWithAtoms as Dialog } from '../DialogWithAtoms';

const baseAtom = atom(false);

const createVmDialogAtom = atom<boolean, boolean>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

export const useWritableCreateVmDialog = () => useAtom(createVmDialogAtom);
export const useReadOnlyCreateVmDialog = () => useAtomValue(createVmDialogAtom);
export const useWriteOnlyCreateVmDialog = () => useSetAtom(createVmDialogAtom);

export const CreateVmDialog = () => {
  const methods = useCreateVmForm();
  const isProduction = useIsProduction();

  return (
    <>
      <FormProvider {...methods}>
        <BaseCreateVmDialog />
      </FormProvider>

      {!isProduction && <DevTool control={methods.control} />}
    </>
  );
};

export const BaseCreateVmDialog = () => {
  const {
    reset,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useCreateVmFormContext();

  const { trigger } = useSWRMutation<void, Error, string[], PostCreateNewVMRequest>(
    getSWRDefaultKey(apiClient.api.v1.vms),
    (_, { arg }) =>
      apiClient.api.v1.vms
        .$post({ body: arg })
        .then(() => {
          enqueueSnackbar('新規仮想マシンの作成に成功しました!', { variant: 'success' });
          handleClose();
          setOpen(false);
        })
        .catch(() => {
          enqueueSnackbar('新規仮想マシンの作成に失敗しました!', { variant: 'error' });
          handleClose();
          setOpen(false);
        })
  );

  const [currentTab, setCurrentTab] = useWritableInstanceTabs();

  const nextTab = useIncInstanceTabs();
  const prevTab = useDecInstanceTabs();

  const setOpen = useWriteOnlyCreateVmDialog();

  const { enqueueSnackbar } = useSnackbar();

  const [isConfirm, setIsConfirm] = useState(false);

  const handleClose = useCallback(() => {
    reset();
    setCurrentTab(0);
    setIsConfirm(false);
  }, [reset, setCurrentTab]);

  // POST Req
  const finish = (body: PostCreateNewVMRequest) => trigger(body);

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
    <Dialog onClose={handleClose} atom={createVmDialogAtom}>
      <DialogTitle>新規仮想マシンの作成</DialogTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <InstanceTabs setIsConfirm={setIsConfirm}>
          <CreateVmForm isConfirm={isConfirm} />
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
