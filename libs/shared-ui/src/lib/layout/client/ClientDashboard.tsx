import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';
import ClientAppLayout from './ClientAppLayout';
import ProtectedRoute from '../../ProtectedRoute';

export const ClientDashboard: React.FC = () => {
  return (
    <ProtectedRoute>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header appName={'Client App'} />
        <ClientAppLayout />
        <Footer />
      </Box>
    </ProtectedRoute>
  );
};
