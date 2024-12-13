import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useSelector } from 'react-redux';
import { getUserStates } from '@full-stack-challenge/services';
import { useQuery } from '@tanstack/react-query';

const AnalyticsCard: React.FC = () => {
  const { data, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUserStates,
  });
  const { name, email } = useSelector((state: any) => state?.auth);

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
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AccountCircleIcon sx={{ mr: 1, fontSize: '2rem' }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold', fontSize: '2rem' }}
            >
              User Analytics
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              Total Users: {data?.user}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              Admins: {data?.admin}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              Total: {data?.total}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              mt: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AdminPanelSettingsIcon sx={{ mr: 1, fontSize: '2rem' }} />
              <Typography
                variant="body1"
                sx={{ fontSize: '1rem', fontWeight: 'bold' }}
              >
                Admin Users Info
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Name : {name}
              <br />
              Email : {email}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AnalyticsCard;
