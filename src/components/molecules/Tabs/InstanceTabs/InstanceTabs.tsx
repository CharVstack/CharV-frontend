import { Box, Container, Stack, Tab, Tabs } from '@mui/material';
import { Dispatch, ReactNode, SyntheticEvent, useEffect, useState } from 'react';

import { Actions, TabsState } from '@components/organisms/Dialogs';

import { InstanceTabItem } from './InstanceTabsProps';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

/*
 * <TabPanel /> of @mui/lab cannot use number at `value`.
 * So, using custom <TabPanel /> .
 */
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const InstanceTabs = ({
  tabs,
  tabsState,
  dispatcher,
}: {
  tabs: InstanceTabItem[];
  tabsState: TabsState;
  dispatcher: Dispatch<Actions>;
}) => {
  // Reset flag
  /*
   * If `<Tab disable={true}/>`, the tab is NOT active (you cannot click it).
   *
   * Array(3).fill(true, 0, 1);
   *  // [true, undefined, undefined]
   *
   * CAUTION:
   *  `!!undeifned` is `false`, so the array equals,
   *  // [true, false, false]
   *
   * It is normal (not bug).
   */
  const tabsLength = tabs.length;
  const [activeTabsFlag, setActiveTabsFlag] = useState<boolean[]>(Array(tabsLength).fill(true, 0, 1));

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    dispatcher({ type: 'updateCurrent', value: newValue });
  };

  useEffect(() => {
    setActiveTabsFlag(Array(tabsLength).fill(true, 0, tabsState.activeTabs + 1));
  }, [tabsState.activeTabs, tabsLength]); // tabsLength will not change.

  return (
    <Stack direction="row">
      <Tabs onChange={handleChange} value={tabsState.currentTab} orientation="vertical">
        {tabs.map((x, i) => (
          <Tab icon={x.tab.icon} label={x.tab.label} value={i} disabled={!activeTabsFlag[i]} />
        ))}
      </Tabs>
      <Container>
        {tabs.map((x, i) => (
          <TabPanel value={tabsState.currentTab} index={i}>
            {x.panel}
          </TabPanel>
        ))}
      </Container>
    </Stack>
  );
};
