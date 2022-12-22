import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BarChart } from './BarChart';

export default { component: BarChart } as ComponentMeta<typeof BarChart>;

export const Default: ComponentStoryObj<typeof BarChart> = {
  args: {
    data: {
      foo: {
        value: 15,
        color: 'red',
      },
      bar: {
        value: 10,
        color: 'green',
      },
    },
  },
  parameters: {
    screenshot: {
      delay: 5000,
    },
  },
};
