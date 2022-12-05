import { Box } from '@mui/material';
import { Atom, useAtomValue } from 'jotai';
import { ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  value: number;
  currentTabAtom: Atom<number>;
};

/*
 * <TabPanel /> of @mui/lab cannot use number at `value`.
 * So, using custom <TabPanel /> .
 */
export const TabPanel = ({ children, value, currentTabAtom, ...other }: TabPanelProps) => {
  const currentTab = useAtomValue(currentTabAtom);
  return (
    <div role="tabpanel" hidden={value !== currentTab} {...other}>
      {value === currentTab && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
