import HomeIcon from '@mui/icons-material/Home';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DrawerLinkItem } from './DrawerLink';

export default { component: DrawerLinkItem } as ComponentMeta<typeof DrawerLinkItem>;

export const Default: ComponentStoryObj<typeof DrawerLinkItem> = {
  args: {
    path: '/',
    name: 'home',
    icon: <HomeIcon />,
  },
};
