import { Typography, Dialog, DialogContent, DialogTitle, useTheme, DialogActions, Button } from '@mui/material';
import { atom, ExtractAtomValue, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';

type BaseDialogProps = {
  message: string;
  title: string;
  onClose: () => void;
  open: boolean;
};

const baseAtom = atom({ open: false, message: 'エラーメッセージ', title: 'Error' });

const errorDialogReadOnlyAtom = atom((get) => get(baseAtom));
const errorDialogWritableAtom = atom<ExtractAtomValue<typeof baseAtom>, Partial<ExtractAtomValue<typeof baseAtom>>>(
  (get) => get(baseAtom),
  (get, set, newValue) => set(baseAtom, { ...get(baseAtom), ...newValue })
);
const errorDialogToggleAtom = atom(null, (get, set) => set(baseAtom, { ...get(baseAtom), open: !get(baseAtom).open }));
const errorDialogWriteOnlyAtom = atom<null, Partial<ExtractAtomValue<typeof baseAtom>>>(null, (get, set, newValue) =>
  set(baseAtom, { ...get(baseAtom), ...newValue })
);

export const useErrorDialogAtom = () => useAtom(errorDialogWritableAtom);
export const useErrorDialogReadOnlyAtom = () => useAtomValue(errorDialogReadOnlyAtom);
export const useErrorDialogToggleAtom = () => useSetAtom(errorDialogToggleAtom);
export const useErrorDialogWriteOnlyAtom = () => useSetAtom(errorDialogWriteOnlyAtom);

export const HookErrorDialog = ({ message, title }: Omit<ExtractAtomValue<typeof baseAtom>, 'open'>) => {
  const setDialog = useErrorDialogWriteOnlyAtom();
  setDialog({ message, title, open: true });
  return null;
};

export const ErrorDialog = () => {
  const [{ title, message, open }, setDialog] = useErrorDialogAtom();

  const close = useCallback(() => setDialog({ open: false }), [setDialog]);

  return <BaseErrorDialog message={message} title={title} open={open} onClose={close} />;
};

/**
 * @package
 */
export const BaseErrorDialog = ({ open, title, message, onClose }: BaseDialogProps) => {
  const theme = useTheme();

  return (
    <Dialog onClose={onClose} sx={{ p: theme.spacing(2) }} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};
