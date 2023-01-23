import { Home as HomeIcon } from '@mui/icons-material';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DrawerLinkItem } from './DrawerLink';

export default { component: DrawerLinkItem } as ComponentMeta<typeof DrawerLinkItem>;

export const Default: ComponentStoryObj<typeof DrawerLinkItem> = {
  args: {
    to: '/',
    text: 'home',
    icon: <HomeIcon />,
  },
};
