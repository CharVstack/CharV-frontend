import { useTheme } from '@mui/material';
import { ReactNode, MouseEventHandler } from 'react';

import { DrawerLinkButton } from '@components/atoms/Buttons';

export type DrawerLinksProps = {
  path: string;
  name: string;
  icon: ReactNode;
  onClick: MouseEventHandler;
};

export const DrawerLinkItem = ({ path, name, icon, onClick }: DrawerLinksProps) => {
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  return (
    <DrawerLinkButton
      textColor={textColor}
      onClick={onClick}
      path={path}
      textDecoration="none"
      name={name}
      icon={icon}
    />
  );
};
