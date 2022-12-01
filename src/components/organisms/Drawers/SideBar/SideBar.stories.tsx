import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { SideBar } from './SideBar';

export default { component: SideBar } as ComponentMeta<typeof SideBar>;

export const Default: ComponentStoryObj<typeof SideBar> = {
  args: {
    isOpen: false,
  },
};
