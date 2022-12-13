import { getSWRDefaultKey } from '@aspida/swr';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useCallback } from 'react';
import { useSWRConfig } from 'swr';

import { useSelectedVmReadOnlyAtom } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';

type BaseVmControlMenuProps = {
  vms: string[];
};

export const VmControlMenu = () => {
  const vms = useSelectedVmReadOnlyAtom();

  return <BaseVmControlMenu vms={vms} />;
};

export const BaseVmControlMenu = ({ vms }: BaseVmControlMenuProps) => {
  const { mutate } = useSWRConfig();
  const handleSubmit = useCallback(
    (action: 'start' | 'shutdown' | 'reboot' | 'reset') => async () => {
      await Promise.all(
        vms.map(async (vm) => {
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
        })
      );
    },
    [vms, mutate]
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ ml: 1, mb: 1 }}>
      <Button
        disabled={vms.length === 0}
        variant="contained"
        onClick={handleClick}
        color="success"
        endIcon={<KeyboardArrowDownIcon />}
      >
        <PowerSettingsNewIcon />
        Actions
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box sx={{ width: 180 }}>
          <MenuItem onClick={handleSubmit('start')} disableRipple>
            Start
          </MenuItem>
          <MenuItem onClick={handleSubmit('shutdown')} disableRipple>
            Shutdown
          </MenuItem>
          <MenuItem onClick={handleSubmit('reboot')} disableRipple>
            Restart
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};
