import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { Button } from '../buttons/Button';
import { authorizeUser, userLogin } from '@full-stack-challenge/services';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from '@full-stack-challenge/store';
import { log } from 'console';
// Type definition for the form data
interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormData) => {
    const response = await userLogin(data);
    const payload = { token: response.token };
    const authResult = await authorizeUser(payload);

    if (authResult?.user) {
      dispatch(
        setUserAuth({
          id: authResult?.user?.user_id,
          name: authResult?.user?.name,
          email: authResult?.user?.email,
          type: authResult?.user?.type,
          isAuthenticated: true,
          token: response?.token,
        })
      );
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        marginTop: '50px',
        border: 'solid black 1px',
        padding: '2rem',
        borderRadius: '0.5rem',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Log-in
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Email field */}
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                />
              )}
            />
          </Grid>

          {/* Password field */}
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  variant="outlined"
                />
              )}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              label="Login"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
