import { Box } from '@mui/material';
import { ReactNode, useContext } from 'react';

import { TabsContext } from './Tabs';

type TabPanelProps = {
  children?: ReactNode;
  value: number;
};

/*
 * <TabPanel /> of @mui/lab cannot use number at `value`.
 * So, using custom <TabPanel /> .
 */
export const TabPanel = ({ children, value, ...other }: TabPanelProps) => {
  const currentTab = useContext(TabsContext);
  return (
    <div role="tabpanel" hidden={value !== currentTab} {...other}>
      {value === currentTab && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
