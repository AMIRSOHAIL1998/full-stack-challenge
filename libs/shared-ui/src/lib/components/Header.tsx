import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import LogoDevIcon from '@mui/icons-material/LogoDev';

interface HeaderProps {
  appName: string; // App name to display in the header
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <LogoDevIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
