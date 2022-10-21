import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingSpinner = ({ open }: { open: boolean }) => (
  <Backdrop
    sx={{
      color: (theme) => theme.palette.common.white,
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
