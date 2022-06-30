import { Box, AppBar, IconButton, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { H5 } from '@components/atoms/Heading';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ color: '#FFFFFF', backgroundColor: '#6272A4' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <H5>CharVstack</H5>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
