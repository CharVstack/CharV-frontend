import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { ConsoleButton } from './ConsoleButton';

export default { component: ConsoleButton } as ComponentMeta<typeof ConsoleButton>;

export const Default: ComponentStoryObj<typeof ConsoleButton> = {
  args: {},
};
