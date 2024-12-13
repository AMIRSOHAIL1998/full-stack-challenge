import './app.module.css';
import NxWelcome from './nx-welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTheme } from '@full-stack-challenge/shared-theme';
import { Button, LoginForm } from '@full-stack-challenge/shared-ui';

const queryClient = new QueryClient();

export function App() {
  const { toggleTheme } = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <LoginForm />
        {/* <SignupForm /> */}
        <Button
          label="Toggle Theme"
          onClick={toggleTheme}
          variant="contained"
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
