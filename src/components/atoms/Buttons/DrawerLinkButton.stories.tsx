import { Home as HomeIcon } from '@mui/icons-material';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DrawerLinkButton } from './DrawerLinkButton';

export default { component: DrawerLinkButton } as ComponentMeta<typeof DrawerLinkButton>;

export const Default: ComponentStoryObj<typeof DrawerLinkButton> = {
  args: {
    to: '/',
    text: 'home',
    icon: <HomeIcon />,
  },
};
