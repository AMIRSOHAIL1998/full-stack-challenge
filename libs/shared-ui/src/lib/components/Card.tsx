import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

interface CardProps {
  title: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <MuiCard>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </MuiCard>
  );
};
