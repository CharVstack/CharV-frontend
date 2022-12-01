import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { useState } from 'react';

import { TabPanel } from './TabPanel';
import { TabsContext, TabsDispatchContext, Tabs, TabProps } from './Tabs';

export default {
  decorators: [
    (Story) => {
      const [currentTab, setCurrentTab] = useState(0);
      return (
        <TabsContext.Provider value={currentTab}>
          <TabsDispatchContext.Provider value={setCurrentTab}>
            <Story />
          </TabsDispatchContext.Provider>
        </TabsContext.Provider>
      );
    },
  ],
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const tabs: TabProps[] = [
  {
    label: 'タブ1',
    value: 0,
  },
  {
    label: 'タブ2',
    value: 1,
  },
];

export const Default: ComponentStoryObj<typeof Tabs> = {
  args: {
    tabs,
    children: tabs.map((tab) => (
      <TabPanel key={tab.value} value={tab.value}>
        {tab.label}
      </TabPanel>
    )),
    orientation: 'vertical',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('tab', { name: 'タブ2' }));
    await waitFor(() => {
      const content = canvas.getByRole('tabpanel', { hidden: false });
      expect(content.textContent).toBe('タブ2');
    });
    userEvent.click(canvas.getByRole('tab', { name: 'タブ1' }));
    await waitFor(() => {
      const content = canvas.getByRole('tabpanel', { hidden: false });
      expect(content.textContent).toBe('タブ1');
    });
  },
};
