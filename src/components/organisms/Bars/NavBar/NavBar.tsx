import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CharVstack
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
