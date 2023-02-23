import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { atom } from 'jotai';

import { TabPanel } from './TabPanel';
import { TabsWithAtoms as Tabs, TabProps } from './Tabs';

const baseAtom = atom(0);

const tabAtom = atom<number, [number], void>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

export default {
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
      <TabPanel currentTabAtom={tabAtom} key={tab.value} value={tab.value}>
        {tab.label}
      </TabPanel>
    )),
    currentTabAtom: tabAtom,
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
