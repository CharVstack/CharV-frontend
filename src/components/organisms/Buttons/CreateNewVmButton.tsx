/**
 * --------------------------------------
 *    VM作成ダイアログのために一時的に作成
 *    ToDo: Instanceページ作成時に削除予定
 * --------------------------------------
 */

import { Button } from '@mui/material';
import { useState } from 'react';

import { CreateVmDialog } from '@components/organisms/Dialogs';

export const CreateNewVmButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        新規仮想マシンの作成
      </Button>
      <CreateVmDialog isOpen={isOpen} onClick={handleClose} />
    </>
  );
};
