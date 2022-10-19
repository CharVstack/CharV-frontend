import AddTaskIcon from '@mui/icons-material/AddTask';
import CreateIcon from '@mui/icons-material/Create';
import { Container, Stack, Tab, Tabs } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useFormContext } from 'react-hook-form';

import { TabPanel } from '@components/molecules/Tabs';

type Props = {
  tab: (isConfirm: boolean) => JSX.Element;
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
};

export const InstanceTabs = ({ tab, currentTab, setCurrentTab }: Props) => {
  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Stack direction="row">
      <Tabs onChange={handleChange} value={currentTab} orientation="vertical">
        <Tab icon={<CreateIcon />} label="作成" value={0} />
        <Tab icon={<AddTaskIcon />} label="確認" value={1} disabled={!isValid || !isDirty} />
      </Tabs>
      <Container>
        <TabPanel index={0} value={currentTab}>
          {tab(false)}
        </TabPanel>
        <TabPanel index={1} value={currentTab}>
          {tab(true)}
        </TabPanel>
      </Container>
    </Stack>
  );
};
