import { Dialog as MUIDialog } from '@mui/material';
import { useAtom, WritableAtom } from 'jotai';
import { useCallback, ReactNode } from 'react';

type DialogProps = {
  onClose?: () => void;
  atom: WritableAtom<boolean, boolean>;
  children: ReactNode;
};

export const DialogWithAtoms = ({ onClose, atom, children }: DialogProps) => {
  const [open, setOpen] = useAtom(atom);
  const handleClose = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose, setOpen]);
  return (
    <MUIDialog open={open} onClose={handleClose} disableEscapeKeyDown>
      {children}
    </MUIDialog>
  );
};
