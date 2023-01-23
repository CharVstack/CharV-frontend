import { Computer as ComputerIcon, Home as HomeIcon } from '@mui/icons-material';
import { Box, Drawer, List, Toolbar } from '@mui/material';
import { atom, useAtomValue, useSetAtom, useAtom } from 'jotai';

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

export const SideBar = () => (
  <Drawer variant="permanent" sx={{ zIndex: (theme) => theme.zIndex.drawer }}>
    <Toolbar />
    <Box width={198}>
      <List>
        <DrawerLinkItem to="/" text="Home" icon={<HomeIcon />} />
        <DrawerLinkItem to="/vms" text="VMs" icon={<ComputerIcon />} />
      </List>
    </Box>
  </Drawer>
);
