import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H2 } from './Headings';

export default { component: H2 } as ComponentMeta<typeof H2>;

export const Heading2: ComponentStoryObj<typeof H2> = {
  args: {
    children: 'Heading2',
  },
};
