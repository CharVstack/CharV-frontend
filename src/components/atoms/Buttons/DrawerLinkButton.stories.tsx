import HomeIcon from '@mui/icons-material/Home';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DrawerLinkButton } from './DrawerLinkButton';

export default { component: DrawerLinkButton } as ComponentMeta<typeof DrawerLinkButton>;

export const Default: ComponentStoryObj<typeof DrawerLinkButton> = {
  args: {
    path: '/',
    name: 'home',
    icon: <HomeIcon />,
  },
};
