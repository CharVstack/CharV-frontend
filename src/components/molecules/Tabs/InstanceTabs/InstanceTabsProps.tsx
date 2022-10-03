import { ReactElement, ReactNode } from 'react';

export type InstanceTabItem = {
  tab: {
    icon: string | ReactElement | undefined;
    label: string;
  };
  panel: ReactNode;
};
