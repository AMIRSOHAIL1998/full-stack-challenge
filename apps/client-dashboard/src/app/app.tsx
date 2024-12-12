import './app.module.css';
import NxWelcome from './nx-welcome';
import { useTheme } from '@full-stack-challenge/shared-theme';
import {
  Button,
  Card,
  SignupForm,
  LoginForm,
  DashboardLayout,
} from '@full-stack-challenge/shared-ui';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const { toggleTheme } = useTheme();
  const onSubmit = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log('Form Data:', data);
    // Send this data to your API for signup
  };

  const onLogin = (data: { email: string; password: string }) => {
    console.log('Form Data:', data);
    // Send this data to your API for signup
  };
  return (
    <div>
      {/* <h1 style={{ color: theme.primary }}> */}
      {/* Admin Dashboard - {theme.name} Theme */}
      <DashboardLayout appName="Client App">
        <LoginForm onSubmit={onLogin} />
        <SignupForm onSubmit={onSubmit} />
        <Button
          label="Toggle Theme"
          onClick={toggleTheme}
          variant="contained"
        />
        <Card title="Welcome" content="This is the admin dashboard." />
        <NxWelcome title="admin-dashboard" />
      </DashboardLayout>
      {/* </h1> */}
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
