import { AppBar, Toolbar, Typography } from '@mui/material';

export const NavBar = () => (
  <AppBar position="sticky" sx={{ zindex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        CharVstack
      </Typography>
    </Toolbar>
  </AppBar>
);
