import AddTaskIcon from '@mui/icons-material/AddTask';
import CreateIcon from '@mui/icons-material/Create';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { Tabs, TabProps } from '@components/atoms/Tabs';
import { CreateVmFormDispatchContext } from '@components/organisms/Buttons/CreateNewVmButton';

type Props = {
  children: JSX.Element;
};

export const InstanceTabs = ({ children }: Props) => {
  const setIsConfirm = useContext(CreateVmFormDispatchContext);

  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  const tabs: TabProps[] = [
    {
      icon: <CreateIcon />,
      label: '作成',
      value: 0,
      onClick: () => setIsConfirm(false),
    },
    {
      icon: <AddTaskIcon />,
      label: '確認',
      value: 1,
      disabled: !isValid || !isDirty,
      onClick: () => setIsConfirm(true),
    },
  ];
  return (
    <Tabs orientation="vertical" tabs={tabs}>
      {children}
    </Tabs>
  );
};
