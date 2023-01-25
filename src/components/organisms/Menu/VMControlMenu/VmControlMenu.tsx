import { getSWRDefaultKey } from '@aspida/swr';
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from '@mui/icons-material';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import memoizeOne from 'memoize-one';
import { useState, useMemo } from 'react';
import { mutate } from 'swr';

import { VmPowerActions } from '@api-hooks/v1/@types';
import { apiClient } from '@lib/apiClient';

import { useSelectedVmReadOnlyAtom, useResetSelectedVmAtom } from './atoms';

type BaseVmControlMenuProps = {
  vms: string[];
};

const useSubmitHandlerFactory = (vms: string[], handleClose: () => void) => {
  const reset = useResetSelectedVmAtom();
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
                reset();
                handleClose();
              })
              .catch(() => {
                reset();
                handleClose();
              });
          })
        );
      }),
    [vms, handleClose, reset]
  );
  return submitHandlerFactory;
};

export const VmsControlMenu = () => {
  const vms = useSelectedVmReadOnlyAtom();

  return <BaseVmControlMenu vms={vms} />;
};

export const VmControlMenu = ({ vmId }: { vmId: string }) => <BaseVmControlMenu vms={[vmId]} />;

/**
 * @package
 */
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
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        startIcon={<PowerSettingsNewIcon />}
      >
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
