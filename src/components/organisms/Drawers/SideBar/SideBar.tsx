import { Computer as ComputerIcon, Home as HomeIcon } from '@mui/icons-material';
import { Box, Drawer, List, Toolbar } from '@mui/material';

import { DrawerLinkItem } from '@components/molecules/ListItems';

export const SideBar = () => (
  <Drawer
    variant="persistent"
    open
    sx={{ zIndex: (theme) => theme.zIndex.drawer }}
    PaperProps={{ sx: { background: 'rgba(255,255,255,0.15)' } }}
  >
    <Toolbar />
    <Box width={198}>
      <List>
        <DrawerLinkItem to="/home" text="Home" icon={<HomeIcon />} />
        <DrawerLinkItem to="/vms" text="VMs" icon={<ComputerIcon />} />
      </List>
    </Box>
  </Drawer>
);
