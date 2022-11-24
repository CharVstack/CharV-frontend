import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H1 } from './Headings';

export default { component: H1 } as ComponentMeta<typeof H1>;

export const Heading1: ComponentStoryObj<typeof H1> = {
  args: {
    children: 'Heading1',
  },
};
