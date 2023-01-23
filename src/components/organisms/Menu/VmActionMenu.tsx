import { getSWRDefaultKey } from '@aspida/swr';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import memoizeOne from 'memoize-one';
import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mutate } from 'swr';

import { VmPowerActions } from '@api-hooks/v1/@types';
import { apiClient } from '@lib/apiClient';

type Props = {
  vmId: string;
};

export const useSubmitHandlerFactory = (vm: string, handleClose: () => void) => {
  const submitHandlerFactory = useMemo(
    () =>
      memoizeOne((action: VmPowerActions) => async () => {
        await apiClient.api.v1.vms
          ._vmId(vm)
          .power.$post({ body: { action } })
          .then(async () => {
            await mutate(getSWRDefaultKey(apiClient.api.v1.vms._vmId(vm)));
            handleClose();
          })
          .catch(() => {
            handleClose();
          });
      }),
    [vm, handleClose]
  );
  return submitHandlerFactory;
};

export const VmActionMenu = ({ vmId }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const jump = useCallback((to: string) => () => navigate(to), [navigate]);

  const handleSubmitFactory = useSubmitHandlerFactory(vmId, handleClose);

  return (
    <>
      <Button variant="contained" onClick={handleClick} color="success">
        <MenuIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box sx={{ width: 180 }}>
          <MenuItem onClick={handleSubmitFactory('start')} disableRipple>
            Start
          </MenuItem>
          <MenuItem onClick={handleSubmitFactory('shutdown')} disableRipple>
            Shutdown
          </MenuItem>
          <MenuItem onClick={handleSubmitFactory('reboot')} disableRipple>
            Restart
          </MenuItem>
          <MenuItem onClick={jump(`/vnc?vmId=${vmId}`)} disableRipple>
            Console
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};
