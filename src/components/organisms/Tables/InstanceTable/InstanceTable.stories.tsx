import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InstanceTable } from './InstanceTable';

export default { component: InstanceTable } as ComponentMeta<typeof InstanceTable>;

export const Default: ComponentStoryObj<typeof InstanceTable> = {
  args: {},
};
