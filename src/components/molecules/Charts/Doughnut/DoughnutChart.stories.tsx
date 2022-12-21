import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DoughnutChart } from './DoughnutChart';

export default { component: DoughnutChart } as ComponentMeta<typeof DoughnutChart>;

export const Default: ComponentStoryObj<typeof DoughnutChart> = {
  args: {
    data: {
      foo: {
        value: 10,
        color: 'red',
      },
      bar: {
        value: 5,
        color: 'green',
      },
    },
  },
  parameters: {
    chromatic: {
      delay: 500,
    },
  },
};
