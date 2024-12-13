import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
// Import Button from shared-ui
import { Button } from '@full-stack-challenge/shared-ui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutAndRedirect = async () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
  };
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

        {/* Logout Button positioned at the right */}
        <Button label={'Logout'} onClick={handleLogoutAndRedirect} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
