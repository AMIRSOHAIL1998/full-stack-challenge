import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

interface DashboardProps {
  appName: string;
  children: React.ReactNode; // Content to render inside the dashboard
}

export const DashboardLayout: React.FC<DashboardProps> = ({
  appName,
  children,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header appName={appName} />

      {/* Main content */}
      <Container component="main" sx={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
