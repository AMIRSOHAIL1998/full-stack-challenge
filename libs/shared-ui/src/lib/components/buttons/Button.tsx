import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface MyButtonProps extends ButtonProps {
  label: string;
}

export const Button: React.FC<MyButtonProps> = ({ label, ...props }) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};
