import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const DrawerLinkItem = ({ path, name, icon }: { path: string; name: string; icon: ReactNode }) => {
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  return (
    <Link to={path} style={{ color: textColor, textDecoration: 'none' }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
