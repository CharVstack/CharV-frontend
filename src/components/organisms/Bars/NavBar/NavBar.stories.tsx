import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BaseNavBar as NavBar } from './NavBar';

export default { component: NavBar } as ComponentMeta<typeof NavBar>;

export const Default: ComponentStoryObj<typeof NavBar> = {};
