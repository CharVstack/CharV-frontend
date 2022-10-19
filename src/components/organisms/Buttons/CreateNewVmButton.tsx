/**
 * --------------------------------------
 *    VM作成ダイアログのために一時的に作成
 *    ToDo: Instanceページ作成時に削除予定
 * --------------------------------------
 */

import { Button } from '@mui/material';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { CreateVmDialog } from '@components/organisms/Dialogs';

export const CreateNewVmButton = () => {
  const { reset } = useFormContext();

  const [currentTab, setCurrentTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    reset();
    setCurrentTab(0);
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        新規仮想マシンの作成
      </Button>
      <CreateVmDialog isOpen={isOpen} onClick={handleClose} currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
  );
};
