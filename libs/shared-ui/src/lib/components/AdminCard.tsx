import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

interface AdminCardProps {
  userName: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ userName }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '2rem',
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 600, padding: '2rem' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DashboardIcon sx={{ mr: 1, fontSize: '2rem' }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold', fontSize: '2rem' }}
            >
              Welcome, {userName}!
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, fontSize: '1.25rem' }}
          >
            You are logged in as an admin. Here, you can manage users, view
            analytics, and perform other administrative tasks.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminCard;
