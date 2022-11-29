import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { CardTitle } from './CardTitle';

export default { component: CardTitle } as ComponentMeta<typeof CardTitle>;

export const Title: ComponentStoryObj<typeof CardTitle> = {
  args: {
    title: 'タイトル',
  },
};
