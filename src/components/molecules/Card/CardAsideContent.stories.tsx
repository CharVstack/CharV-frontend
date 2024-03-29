import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { CardAsideContentBox } from './CardAsideContent';

export default { component: CardAsideContentBox } as ComponentMeta<typeof CardAsideContentBox>;

export const Default: ComponentStoryObj<typeof CardAsideContentBox> = {
  args: {
    children: 'Aside Content',
  },
};
