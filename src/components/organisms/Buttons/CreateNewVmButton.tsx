/**
 * --------------------------------------
 *    VM作成ダイアログのために一時的に作成
 *    ToDo: Instanceページ作成時に削除予定
 * --------------------------------------
 */

import { Button } from '@mui/material';
import { useState, createContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { TabsContext, TabsDispatchContext } from '@components/atoms/Tabs';
import { CreateVmDialog } from '@components/organisms/Dialogs';

export type CreateVmFormContextType = boolean;
export type CreateVmFormDispatchContextType = React.Dispatch<React.SetStateAction<boolean>>;

export const CreateVmFormContext = createContext<CreateVmFormContextType>({} as CreateVmFormContextType);
export const CreateVmFormDispatchContext = createContext<CreateVmFormDispatchContextType>(
  {} as CreateVmFormDispatchContextType
);

export const CreateNewVmButton = () => {
  const { reset } = useFormContext();

  const [currentTab, setCurrentTab] = useState(0);

  const [isConfirm, setIsConfirm] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    reset();
    setCurrentTab(0);
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        新規仮想マシンの作成
      </Button>
      <CreateVmFormContext.Provider value={isConfirm}>
        <CreateVmFormDispatchContext.Provider value={setIsConfirm}>
          <TabsDispatchContext.Provider value={setCurrentTab}>
            <TabsContext.Provider value={currentTab}>
              <CreateVmDialog isOpen={isOpen} handleClose={handleClose} />
            </TabsContext.Provider>
          </TabsDispatchContext.Provider>
        </CreateVmFormDispatchContext.Provider>
      </CreateVmFormContext.Provider>
    </>
  );
};
