import { Box } from '@mui/material';
import { ReactNode, useState } from 'react';

import { NavBar } from '@components/organisms/Bars';
import { Sidebar } from '@components/organisms/Drawers';

export const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((x) => !x);
  };
  return (
    <>
      <NavBar onClick={onClick} />
      <Sidebar isOpen={isOpen} setIsOpen={onClick} />
      <Box sx={{ pt: 4, pb: 4 }}>{children}</Box>
    </>
  );
};
