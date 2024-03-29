import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { H4 } from './Headings';

export default { component: H4 } as ComponentMeta<typeof H4>;

export const Default: ComponentStoryObj<typeof H4> = {
  args: {
    children: 'Heading4',
  },
};
