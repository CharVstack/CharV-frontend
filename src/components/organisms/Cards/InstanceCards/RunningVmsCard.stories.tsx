import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { RunningVmsCard } from './RunningVmsCard';

export default { args: { allVms: 10, runningVms: 5 }, component: RunningVmsCard } as ComponentMeta<
  typeof RunningVmsCard
>;

export const Default: ComponentStoryObj<typeof RunningVmsCard> = {
  args: {
    runningVms: 10,
    allVms: 20,
  },
};
