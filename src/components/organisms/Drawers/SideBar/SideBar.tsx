import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Drawer, List } from '@mui/material';
import { atom, useAtomValue, useSetAtom, useAtom } from 'jotai';
import { useCallback } from 'react';

import { DrawerLinkItem } from '@components/molecules/ListItems';

const baseAtom = atom(false);
const sideBarAtom = atom<boolean, boolean>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);
const toggleSideBarAtom = atom(null, (get, set) => set(baseAtom, !get(baseAtom)));

export const useSideBarWritableAtom = () => useAtom(sideBarAtom);
export const useSideBarReadOnlyAtom = () => useAtomValue(sideBarAtom);
export const useSideBarWriteOnlyAtom = () => useSetAtom(sideBarAtom);
export const useToggleSideBarAtom = () => useSetAtom(toggleSideBarAtom);

type Props = {
  open: boolean;
  onClose: () => void;
};

export const BaseSideBar = ({ onClose, open }: Props) => (
  <Drawer open={open} onClose={onClose}>
    <Box width={198}>
      <List>
        <DrawerLinkItem onClick={onClose} path="/" name="Home" icon={<HomeIcon />} />
        <DrawerLinkItem onClick={onClose} path="/vms" name="VMs" icon={<ComputerIcon />} />
      </List>
    </Box>
  </Drawer>
);

export const SideBar = () => {
  const [open, setOpen] = useSideBarWritableAtom();
  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return <BaseSideBar open={open} onClose={onClose} />;
};
