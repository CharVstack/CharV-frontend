import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Card } from './Card';

export default { component: Card } as ComponentMeta<typeof Card>;

export const InstanceCard: ComponentStoryObj<typeof Card> = {
  args: {
    title: 'InstanceCard',
  },
};
