import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import AdminAppAuthDashboardLayout from './AdminAppAuthDashboardLayout';
import PublicRoute from '../PublicRoute';

export const AuthDashboard: React.FC = () => {
  return (
    <PublicRoute>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header appName={'Admin App'} />
        <AdminAppAuthDashboardLayout />
        <Footer />
      </Box>
    </PublicRoute>
  );
};
