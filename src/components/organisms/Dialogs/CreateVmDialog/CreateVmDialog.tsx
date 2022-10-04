import useAspidaSWR from '@aspida/swr';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useReducer, useState } from 'react';

import { InstanceTabs } from '@components/molecules/Tabs/InstanceTabs/InstanceTabs';
import { apiClient } from '@lib/apiClient';

import { CreateVmDialogForm } from './CreateVmDialogForm';
import { Actions, TabsState } from './CreateVmDialogTypes';

const validateFormInput = ({ name, cpu, memory }: { name: string; cpu: string; memory: string }) =>
  [name, Number(cpu), Number(memory)] as [string, number, number];

const reducer = (state: TabsState, action: Actions) => {
  switch (action.type) {
    case 'next':
      return { ...state, currentTab: state.currentTab + 1 };
    case 'back':
      return { ...state, currentTab: state.currentTab - 1 };
    case 'activateNext':
      return { ...state, currentTab: state.activeTabs + 1 };
    case 'updateCurrent':
      return { ...state, currentTab: state.currentTab };
    case 'updateActive':
      return { ...state, currentTab: state.activeTabs };
    default:
      return state;
  }
};

export const CreateVmDialog = ({ isOpen, onClick }: { isOpen: boolean; onClick(): void }) => {
  // forms state
  const [newVmName, setNewVmName] = useState('');
  const [newVmCpu, setNewVmCpu] = useState('');
  const [newVmMemory, setNewVmMemory] = useState('');

  // validated value
  const [validName, validCpu, validMemory] = validateFormInput({ name: newVmName, cpu: newVmCpu, memory: newVmMemory });

  // tabs
  const initialState = { currentTab: 0, activeTabs: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const tabs = [
    {
      tab: {
        icon: <CreateIcon />,
        label: '構成',
      },
      panel: <CreateVmDialogForm tab="edit" setName={setNewVmName} setCpu={setNewVmCpu} setMemory={setNewVmMemory} />,
    },
    {
      tab: {
        icon: <AddTaskIcon />,
        label: '作成',
      },
      panel: <CreateVmDialogForm tab="confirm" name={validName} cpu={validCpu} memory={validMemory} />,
    },
  ];

  // POST input data
  const [canFetch, setCanFetch] = useState(false);

  const postAPI = () => {
    setCanFetch(true);
  };

  useAspidaSWR(apiClient.api.v1.vms, 'post', {
    body: { name: validName, vcpu: validCpu, memory: validMemory },
    enabled: canFetch,
  });

  return (
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>新規仮想マシンの作成</DialogTitle>
      <InstanceTabs tabs={tabs} tabsState={state} dispatcher={dispatch} />
      <DialogActions>
        <Button onClick={() => dispatch({ type: 'back' })} disabled={state.currentTab === 0}>
          Back
        </Button>
        <Button onClick={() => dispatch({ type: 'next' })} disabled={state.currentTab === tabs.length - 1}>
          Next
        </Button>
        <Button onClick={postAPI} disabled={state.currentTab !== tabs.length - 1}>
          Finish
        </Button>
        <Button onClick={onClick}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
