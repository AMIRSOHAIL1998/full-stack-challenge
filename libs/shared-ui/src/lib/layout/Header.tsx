import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
// Import Button from shared-ui
import { Button } from '@full-stack-challenge/shared-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@full-stack-challenge/shared-theme';

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode } = useTheme();

  const { id } = useSelector((state: any) => state?.auth);

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
        {id && (
          <Button
            label={'Logout'}
            onClick={handleLogoutAndRedirect}
            style={{
              backgroundColor: mode === 'light' ? '#ffffff' : '#1c1c1c',
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
