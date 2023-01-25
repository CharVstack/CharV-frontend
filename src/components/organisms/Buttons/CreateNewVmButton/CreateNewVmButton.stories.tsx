import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { CreateNewVmButton } from './CreateNewVmButton';

export default { component: CreateNewVmButton } as ComponentMeta<typeof CreateNewVmButton>;

export const Default: ComponentStoryObj<typeof CreateNewVmButton> = {
  args: {},
};
