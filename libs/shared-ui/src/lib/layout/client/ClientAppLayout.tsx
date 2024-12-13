import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@full-stack-challenge/shared-theme';
import { Routes, Route } from 'react-router-dom';
import ClientUserCard from './ClientUserCard';

const ClientAppLayout: React.FC = () => {
  const { mode } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Routes>
        <Route path="/users/:id" element={<ClientUserCard />} />
      </Routes>
    </Box>
  );
};

export default ClientAppLayout;
