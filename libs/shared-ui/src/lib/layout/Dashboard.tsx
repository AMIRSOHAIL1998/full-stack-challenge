import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import AdminAppDashboardLayout from './AdminAppDashboardLayout';
import ProtectedRoute from '../ProtectedRoute';

export const Dashboard: React.FC = () => {
  return (
    <ProtectedRoute>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header appName={'Admin App'} />
        <AdminAppDashboardLayout />
        <Footer />
      </Box>
    </ProtectedRoute>
  );
};
