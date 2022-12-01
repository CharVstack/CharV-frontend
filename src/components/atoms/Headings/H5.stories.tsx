import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H5 } from './Headings';

export default { component: H5 } as ComponentMeta<typeof H5>;

export const Default: ComponentStoryObj<typeof H5> = {
  args: {
    children: 'Heading5',
  },
};
