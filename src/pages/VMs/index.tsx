import AddTaskIcon from '@mui/icons-material/AddTask';
import CreateIcon from '@mui/icons-material/Create';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

import { DashBoardLayout } from '@components/layouts';
import { InstanceTabs } from '@components/molecules/Tabs/InstanceTabs/InstanceTabs';
import { CreateNewVmButton } from '@components/organisms/Buttons/CreateNewVmButton';

export const TmpDialog = () => {
  // 動作確認用の値
  // ToDo: 削除
  const obj = [
    {
      tab: {
        icon: <CreateIcon />,
        label: 'Test1',
      },
      panel: <Box>Test 1</Box>,
    },
    {
      tab: {
        icon: <AddTaskIcon />,
        label: 'Test2',
      },
      panel: <Box>Test 2</Box>,
    },
    {
      tab: {
        icon: <CreateIcon />,
        label: 'Test3',
      },
      panel: <Box>Test 3</Box>,
    },
  ];

  // Switch tabs
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <>
      <Button onClick={() => setActiveTabs((x) => x + 1)}>Next</Button>
      <InstanceTabs tabs={obj} activeTabs={activeTabs} />
    </>
  );
};

export const VMs = () => (
  <DashBoardLayout>
    <CreateNewVmButton />
    <TmpDialog />
  </DashBoardLayout>
);
