import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Typography variant="body2">Epicode@full-stack-challenge</Typography>
    </Box>
  );
};

export default Footer;
