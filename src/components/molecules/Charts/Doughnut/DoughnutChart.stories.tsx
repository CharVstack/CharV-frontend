import { Box } from '@mui/material';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DoughnutChart } from './DoughnutChart';

export default {
  component: DoughnutChart,
  decorators: [
    (Story) => (
      <Box sx={{ width: '750px', height: '750px' }}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof DoughnutChart>;

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
    screenshot: {
      delay: 5000,
    },
  },
};
