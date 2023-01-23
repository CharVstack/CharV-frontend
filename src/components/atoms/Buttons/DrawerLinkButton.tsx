import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type DrawerLinksProps = {
  to: string;
  text: string;
  icon: ReactNode;
  textDecoration: React.CSSProperties['textDecoration'];
};

export const DrawerLinkButton = ({ to, text, icon, textDecoration }: DrawerLinksProps) => {
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  return (
    <Link role="link" to={to} style={{ color: textColor, textDecoration }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
