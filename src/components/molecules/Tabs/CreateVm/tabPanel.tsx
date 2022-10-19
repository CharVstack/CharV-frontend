import { Box } from '@mui/material';
import { ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

/*
 * <TabPanel /> of @mui/lab cannot use number at `value`.
 * So, using custom <TabPanel /> .
 */
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
