import { getSWRDefaultKey } from '@aspida/swr';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import memoizeOne from 'memoize-one';
import { useState, useMemo } from 'react';
import { mutate } from 'swr';

import { VmPowerActions } from '@api-hooks/v1/@types';
import { useSelectedVmReadOnlyAtom } from '@components/organisms/Tables';
import { apiClient } from '@lib/apiClient';

type BaseVmControlMenuProps = {
  vms: string[];
};

const useSubmitHandlerFactory = (vms: string[], handleClose: () => void) => {
  const submitHandlerFactory = useMemo(
    () =>
      memoizeOne((action: VmPowerActions) => async () => {
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
      }),
    [vms, handleClose]
  );
  return submitHandlerFactory;
};

export const VmControlMenu = () => {
  const vms = useSelectedVmReadOnlyAtom();

  return <BaseVmControlMenu vms={vms} />;
};

export const BaseVmControlMenu = ({ vms }: BaseVmControlMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmitFactory = useSubmitHandlerFactory(vms, handleClose);

  return (
    <>
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
          <MenuItem onClick={handleSubmitFactory('start')} disableRipple>
            Start
          </MenuItem>
          <MenuItem onClick={handleSubmitFactory('shutdown')} disableRipple>
            Shutdown
          </MenuItem>
          <MenuItem onClick={handleSubmitFactory('reboot')} disableRipple>
            Restart
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};
