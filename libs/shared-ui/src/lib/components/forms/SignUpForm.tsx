import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Grid } from '@mui/material';
import { Container, Typography } from '@mui/material';

// Type definition for the form data
interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Validation function to check if passwords match
const validatePasswords = (value: string, getValues: any) => {
  const { password } = getValues();
  return value === password || 'Passwords do not match';
};

export const SignupForm: React.FC<{
  onSubmit: (data: SignupFormData) => void;
}> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Name field */}
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  variant="outlined"
                />
              )}
            />
          </Grid>

          {/* Email field */}
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
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

          {/* Confirm Password field */}
          <Grid item xs={12}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirm Password is required',
                validate: (value) => validatePasswords(value, getValues),
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  variant="outlined"
                />
              )}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
