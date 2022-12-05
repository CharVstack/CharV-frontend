import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BaseSideBar } from './SideBar';

export default { component: BaseSideBar } as ComponentMeta<typeof BaseSideBar>;

export const Default: ComponentStoryObj<typeof BaseSideBar> = {
  args: {
    open: false,
  },
};
