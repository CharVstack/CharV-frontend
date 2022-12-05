import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type DrawerLinksProps = {
  path: string;
  name: string;
  icon: ReactNode;
  onClick: React.MouseEventHandler;
  textColor: string;
  textDecoration: React.CSSProperties['textDecoration'];
};

export const DrawerLinkButton = ({ path, name, icon, onClick, textColor, textDecoration }: DrawerLinksProps) => (
  <Link role="link" onClick={onClick} to={path} style={{ color: textColor, textDecoration }}>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  </Link>
);
