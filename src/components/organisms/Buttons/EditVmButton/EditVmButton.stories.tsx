import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { EditVmButton } from './EditVmButton';

export default { component: EditVmButton } as ComponentMeta<typeof EditVmButton>;

export const Default: ComponentStoryObj<typeof EditVmButton> = {
  args: {},
};
