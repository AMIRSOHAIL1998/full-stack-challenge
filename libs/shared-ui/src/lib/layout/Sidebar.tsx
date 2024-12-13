import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@full-stack-challenge/shared-theme';

const Sidebar: React.FC = () => {
  const { mode } = useTheme();

  const navigationList = [
    {
      path: '/',
      title: 'Dashboard',
    },
    {
      path: '/users',
      title: 'Users',
    },
    {
      path: '/analytics',
      title: 'Analytics',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: mode === 'light' ? '#f0f0f0' : 'black',
        color: mode === 'light' ? '#000' : '#fff',
        padding: '16px',
        height: '100vh',
      }}
    >
      <List>
        {navigationList?.map((navItem: any, index: number) => {
          return (
            <ListItem
              key={index}
              style={{
                borderBottom:
                  mode === 'light' ? '1px solid gray' : '1px solid red',
              }}
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor:
                    mode === 'light'
                      ? 'rgba(0, 0, 0, 0.08)' // Light mode hover color
                      : 'rgba(255, 255, 255, 0.12)', // Dark mode hover color
                },
              }}
            >
              <NavLink
                to={navItem?.path}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '100%',
                }}
              >
                <ListItemText primary={navItem?.title} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
