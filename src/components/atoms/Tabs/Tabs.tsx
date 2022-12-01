import { Container, Stack, Tab, Tabs as MUITabs, TabsTypeMap } from '@mui/material';
import { SyntheticEvent, useContext, createContext } from 'react';

export type TabsContextType = number;
export type TabsDispatchContextType = React.Dispatch<React.SetStateAction<TabsContextType>>;

export const TabsContext = createContext<TabsContextType>({} as TabsContextType);
export const TabsDispatchContext = createContext<TabsDispatchContextType>({} as TabsDispatchContextType);

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
};

export const Tabs = ({ children, tabs, orientation }: Props) => {
  const setCurrentTab = useContext(TabsDispatchContext);
  const currentTab = useContext(TabsContext);

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
