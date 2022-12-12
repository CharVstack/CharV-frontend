import { getSWRDefaultKey } from '@aspida/swr';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useState, useCallback } from 'react';
import { useSWRConfig } from 'swr';

import { useSelectedVmReadOnlyAtom } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';

type BaseVmControlMenuProps = {
  vms: string[];
};

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
  },
}));

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
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleSubmit('start')} disableRipple>
          Start
        </MenuItem>
        <MenuItem onClick={handleSubmit('shutdown')} disableRipple>
          Shutdown
        </MenuItem>
        <MenuItem onClick={handleSubmit('reboot')} disableRipple>
          Restart
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};
