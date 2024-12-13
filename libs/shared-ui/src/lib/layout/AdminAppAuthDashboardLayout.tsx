import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { useTheme } from '@full-stack-challenge/shared-theme';
import UserTable from '../components/Table';
import { Routes, Route } from 'react-router-dom';
import UserCard from '../components/UserCard';
import AdminCard from '../components/AdminCard';
import AnalyticsCard from '../components/AnalyticsCard';
import { LoginForm } from '../components/forms/LoginForm';
import { SignupForm } from '../components/forms/SignUpForm';

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
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminAppAuthDashboardLayout;
