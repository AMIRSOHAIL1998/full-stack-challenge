import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';
import ClientAuthDashboardLayout from './ClientAuthDashboardLayout';
import PublicRoute from '../../PublicRoute';

export const ClientAuthDashboard: React.FC = () => {
  return (
    <PublicRoute flag="client">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header appName={'Client App'} />
        <ClientAuthDashboardLayout />
        <Footer />
      </Box>
    </PublicRoute>
  );
};
