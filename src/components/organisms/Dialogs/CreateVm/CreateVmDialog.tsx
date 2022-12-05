import useAspidaSWR from '@aspida/swr';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState, useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { TabsContext, TabsDispatchContext } from '@components/atoms/Tabs';
import { CreateVmFormDispatchContext } from '@components/organisms/Buttons/CreateNewVmButton';
import { CommonForm } from '@components/organisms/Forms';
import { InstanceTabs } from '@components/organisms/Tabs';
import { apiClient } from '@lib/apiClient';
import { CommonFormInputs } from '@pages';

type Props = {
  isOpen: boolean;
  handleClose(): void;
};

export const CreateVmDialog = ({ isOpen, handleClose }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const setCurrentTab = useContext(TabsDispatchContext);
  const currentTab = useContext(TabsContext);
  const setIsConfirm = useContext(CreateVmFormDispatchContext);

  const {
    getValues,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useFormContext<CommonFormInputs>();

  // POST Req
  const body = getValues();

  const [isPostEnabled, setIsPostEnabled] = useState(false);
  useAspidaSWR(apiClient.api.v1.vms, '$post', {
    body,
    enabled: isPostEnabled,
    onSuccess: () => {
      enqueueSnackbar('新規仮想マシンの作成に成功しました!', { variant: 'success' });
      setIsPostEnabled(false);
      handleClose();
    },
    onError: () => {
      enqueueSnackbar('新規仮想マシンの作成に失敗しました!', { variant: 'error' });
      setIsPostEnabled(false);
      handleClose();
    },
  });

  // Dialog Actions
  const next = () => {
    setCurrentTab((prev) => prev + 1);
    setIsConfirm(true);
  };

  const back = () => {
    setCurrentTab((prev) => prev - 1);
    setIsConfirm(false);
  };

  const finish = () => {
    setIsPostEnabled(true);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>新規仮想マシンの作成</DialogTitle>
      <InstanceTabs>
        <CommonForm />
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
        <Button onClick={handleClose}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  );
};
