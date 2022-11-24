import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H6 } from './Headings';

export default { component: H6 } as ComponentMeta<typeof H6>;

export const Heading6: ComponentStoryObj<typeof H6> = {
  args: {
    children: 'Heading6',
  },
};
