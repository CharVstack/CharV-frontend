import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Drawer, List } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { DrawerLinkItem } from '@components/molecules/ListItems';

export const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => (
  <Drawer open={isOpen} onClose={setIsOpen}>
    <Box width={198}>
      <List>
        <DrawerLinkItem path="/" name="Home" icon={<HomeIcon />} />
        <DrawerLinkItem path="/vms" name="VMs" icon={<ComputerIcon />} />
      </List>
    </Box>
  </Drawer>
);
