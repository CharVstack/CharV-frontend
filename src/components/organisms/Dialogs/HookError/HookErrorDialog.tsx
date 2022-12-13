import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const CustomizedDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface HookErrorDialogProp {
  message: string;
}

const CustomizedDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 2,
            top: 8,
            color: (theme) => theme.palette.action.disabled,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const HookErrorDialog = ({ message }: HookErrorDialogProp) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomizedDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <CustomizedDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Error
        </CustomizedDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Failed to load: {message}</Typography>
        </DialogContent>
      </CustomizedDialog>
    </div>
  );
};
