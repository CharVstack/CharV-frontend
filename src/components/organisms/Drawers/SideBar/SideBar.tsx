import { Computer as ComputerIcon, Home as HomeIcon } from '@mui/icons-material';
import { Box, Drawer, List, Toolbar } from '@mui/material';

import { DrawerLinkItem } from '@components/molecules/ListItems';

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
