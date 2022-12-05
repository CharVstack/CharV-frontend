import { Container, Stack, Tab, Tabs as MUITabs, TabsTypeMap } from '@mui/material';
import { WritableAtom, useAtom } from 'jotai';
import { SyntheticEvent } from 'react';

export type TabProps = {
  label: React.ReactNode;
  value: number;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

type Props = {
  children?: React.ReactNode;
  tabs: TabProps[];
  orientation: NonNullable<TabsTypeMap['props']['orientation']>;
  currentTabAtom: WritableAtom<number, number>;
};

export const TabsWithAtoms = ({ children, tabs, orientation, currentTabAtom }: Props) => {
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Stack direction={orientation === 'horizontal' ? 'column' : 'row'}>
      <MUITabs onChange={handleChange} value={currentTab} orientation={orientation}>
        {tabs.map((tab) => {
          if (tab.onClick === undefined) {
            const onClick = () => setCurrentTab(tab.value);
            return (
              <Tab
                label={tab.label}
                value={tab.value}
                icon={tab.icon}
                disabled={tab.disabled}
                onClick={onClick}
                key={tab.value}
              />
            );
          }
          return (
            <Tab
              label={tab.label}
              value={tab.value}
              icon={tab.icon}
              disabled={tab.disabled}
              onClick={tab.onClick}
              key={tab.value}
            />
          );
        })}
      </MUITabs>
      <Container>{children}</Container>
    </Stack>
  );
};
