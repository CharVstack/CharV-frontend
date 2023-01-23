import { ReactNode } from 'react';

import { DrawerLinkButton } from '@components/atoms/Buttons';

export type DrawerLinksProps = {
  to: string;
  text: string;
  icon: ReactNode;
};

export const DrawerLinkItem = ({ to, text, icon }: DrawerLinksProps) => (
  <DrawerLinkButton to={to} textDecoration="none" text={text} icon={icon} />
);
