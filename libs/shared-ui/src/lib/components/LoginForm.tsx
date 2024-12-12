import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid } from '@mui/material';
import { Container, Typography } from '@mui/material';

// Type definition for the form data
interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<{
  onSubmit: (data: LoginFormData) => void;
}> = ({ onSubmit }) => {
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
