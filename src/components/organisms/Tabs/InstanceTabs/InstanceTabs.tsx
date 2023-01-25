import { AddTask as AddTaskIcon, Create as CreateIcon } from '@mui/icons-material';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useFormContext } from 'react-hook-form';

import { TabsWithAtoms as Tabs, TabProps } from '../TabsWithAtoms';

type Props = {
  children: JSX.Element;
  setIsConfirm: (update: boolean) => void;
};

const baseAtom = atom(0);

const instanceTabsAtom = atom<number, number>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);
const incInstanceTabsAtom = atom(null, (_get, set) => set(baseAtom, (prev) => prev + 1));
const decInstanceTabsAtom = atom(null, (_get, set) => set(baseAtom, (prev) => prev - 1));

export const useWritableInstanceTabs = () => useAtom(instanceTabsAtom);
export const useReadOnlyInstanceTabs = () => useAtomValue(instanceTabsAtom);
export const useIncInstanceTabs = () => useSetAtom(incInstanceTabsAtom);
export const useDecInstanceTabs = () => useSetAtom(decInstanceTabsAtom);

export const InstanceTabs = ({ children, setIsConfirm }: Props) => {
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
    <Tabs currentTabAtom={instanceTabsAtom} orientation="vertical" tabs={tabs}>
      {children}
    </Tabs>
  );
};
