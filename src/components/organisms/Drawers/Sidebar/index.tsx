import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const textColor = useTheme();
  const vms = '/vms';
  return (
    <Drawer open={isOpen} onClose={setIsOpen}>
      <Box width={198}>
        <List>
          <Link href="/" color={textColor.palette.text.primary} underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={vms} color={textColor.palette.text.primary} underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ComputerIcon />
                </ListItemIcon>
                <ListItemText primary="VMs" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};
