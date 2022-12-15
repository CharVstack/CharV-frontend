import { Button } from '@mui/material';

import { useWriteOnlyCreateVmDialog } from '@components/organisms/Dialogs';

export const CreateNewVmButton = () => {
  const setIsOpen = useWriteOnlyCreateVmDialog();
  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <Button variant="contained" onClick={handleClickOpen}>
      新規仮想マシンの作成
    </Button>
  );
};
