import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@full-stack-challenge/shared-theme';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from '../../components/forms/LoginForm';
import { SignupForm } from '../../components/forms/SignUpForm';
import { userSignup, authorizeUser } from '@full-stack-challenge/services';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '@full-stack-challenge/store';

const ClientAuthDashboardLayout: React.FC = ({}) => {
  const { mode } = useTheme();
  const dispatch = useDispatch();

  const handleAddUser = async (data: any) => {
    delete data?.confirmPassword;
    const newUser = { ...data, type: 'user' };
    const response = await userSignup(newUser);
    const authResult = await authorizeUser({ token: response?.token });
    dispatch(
      setUserAuth({
        isAuthenticated: true,
        id: authResult?.user?.user_id,
        name: authResult?.user?.name,
        email: authResult?.user?.email,
        type: authResult?.user?.type,
        token: response?.token,
      })
    );
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Box
        sx={{
          backgroundColor: mode === 'light' ? '#ffffff' : '#1c1c1c',
          color: mode === 'light' ? '#000' : '#fff',
          width: '100%',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        <Routes>
          <Route path="/" element={<LoginForm flag={'client'} />} />
          <Route
            path="/signup"
            element={<SignupForm onSubmit={handleAddUser} />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default ClientAuthDashboardLayout;
