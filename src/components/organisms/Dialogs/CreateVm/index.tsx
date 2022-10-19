import useAspidaSWR from '@aspida/swr';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { CommonForm } from '@components/organisms/Forms';
import { InstanceTabs } from '@components/organisms/Tabs';
import { apiClient } from '@lib/apiClient';
import { CommonFormInputs } from '@pages';

type Props = {
  isOpen: boolean;
  onClick(): void;
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
};

export const CreateVmDialog = ({ isOpen, onClick, currentTab, setCurrentTab }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

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
      onClick();
    },
    onError: () => {
      enqueueSnackbar('新規仮想マシンの作成に失敗しました!', { variant: 'error' });
      setIsPostEnabled(false);
      onClick();
    },
  });

  // form & tab field
  const tab = CommonForm;

  // Dialog Actions
  const next = () => {
    setCurrentTab((prev) => prev + 1);
  };

  const back = () => {
    setCurrentTab((prev) => prev - 1);
  };

  const finish = () => {
    setIsPostEnabled(true);
  };

  return (
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>新規仮想マシンの作成</DialogTitle>
      <InstanceTabs tab={tab} currentTab={currentTab} setCurrentTab={setCurrentTab} />
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
        <Button onClick={onClick}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  );
};
