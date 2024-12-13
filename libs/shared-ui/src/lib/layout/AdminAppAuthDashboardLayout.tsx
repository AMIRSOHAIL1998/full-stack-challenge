import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@full-stack-challenge/shared-theme';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from '../components/forms/LoginForm';

const AdminAppAuthDashboardLayout: React.FC = ({}) => {
  const { mode } = useTheme();

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Box
        sx={{
          backgroundColor: mode === 'light' ? '#ffffff' : '#1c1c1c',
          color: mode === 'light' ? '#000' : '#fff',
          width: '100%',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        <Routes>
          <Route path="/" element={<LoginForm flag={'admin'} />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminAppAuthDashboardLayout;
