import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { useToggleSideBarAtom } from '@components/organisms/Drawers';

type Props = {
  onClick: () => void;
};

export const BaseNavBar = ({ onClick }: Props) => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onClick}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        CharVstack
      </Typography>
    </Toolbar>
  </AppBar>
);

export const NavBar = () => {
  const toggleOpen = useToggleSideBarAtom();
  return <BaseNavBar onClick={toggleOpen} />;
};
