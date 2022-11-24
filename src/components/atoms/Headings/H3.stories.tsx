import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H3 } from './Headings';

export default { component: H3 } as ComponentMeta<typeof H3>;

export const Heading3: ComponentStoryObj<typeof H3> = {
  args: {
    children: 'Heading3',
  },
};
