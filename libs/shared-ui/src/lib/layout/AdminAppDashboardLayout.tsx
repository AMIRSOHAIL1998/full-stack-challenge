import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { useTheme } from '@full-stack-challenge/shared-theme';
import UserTable from '../components/Table';
import { Routes, Route } from 'react-router-dom';
import UserCard from '../components/UserCard';
import AdminCard from '../components/AdminCard';
import AnalyticsCard from '../components/AnalyticsCard';

const AdminAppDashboardLayout: React.FC = ({}) => {
  const { mode } = useTheme();

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* First Section - Sidebar */}
      <Box
        sx={{
          width: '20%',
          backgroundColor: 'grey.100',
          overflowX: 'hidden',
          borderRight: '1px solid #ddd',
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          backgroundColor: mode === 'light' ? '#ffffff' : '#1c1c1c',
          color: mode === 'light' ? '#000' : '#fff',
          width: '80%',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        <Routes>
          <Route path="/users" element={<UserTable />} />
          <Route path="/" element={<AdminCard userName={'Amir'} />} />
          <Route path="/analytics" element={<AnalyticsCard />} />
          <Route path="/users/:id" element={<UserCard />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminAppDashboardLayout;
