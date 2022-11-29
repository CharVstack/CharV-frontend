import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { LoadingSpinner } from '.';

export default { component: LoadingSpinner } as ComponentMeta<typeof LoadingSpinner>;

export const Loading: ComponentStoryObj<typeof LoadingSpinner> = {
  args: {
    open: true,
  },
};
