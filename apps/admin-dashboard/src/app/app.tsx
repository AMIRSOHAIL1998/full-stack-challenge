import './app.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, AuthDashboard } from '@full-stack-challenge/shared-ui';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <main className="flex items-center justify-center h-screen overflow-x-hidden">
          <Routes>
            <Route path="/auth/*" element={<AuthDashboard />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
