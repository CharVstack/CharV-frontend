import { Edit as EditIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useCallback } from 'react';

import { useWriteOnlyUpdateVmDialog } from '@components/organisms/Dialogs';

export const EditVmButton = () => {
  const setIsOpen = useWriteOnlyUpdateVmDialog();
  const onClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  return (
    <Button startIcon={<EditIcon />} variant="contained" color="secondary" onClick={onClick}>
      EDIT
    </Button>
  );
};
