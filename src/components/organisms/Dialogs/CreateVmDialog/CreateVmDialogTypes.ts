import React from 'react';

export type CreateVmEditProps = {
  tab: 'edit';
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCpu: React.Dispatch<React.SetStateAction<string>>;
  setMemory: React.Dispatch<React.SetStateAction<string>>;
};

export type CreateVmConfirmProps = {
  tab: 'confirm';
  name: string;
  cpu: number;
  memory: number;
};

export type CreateVmFormProps = CreateVmEditProps | CreateVmConfirmProps;

export type TabsState = {
  currentTab: number;
  activeTabs: number;
};

export type Actions =
  | { type: 'next' }
  | { type: 'back' }
  | { type: 'activateNext' }
  | { type: 'updateCurrent'; value: number }
  | { type: 'updateActive'; value: number };
