import './app.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  ClientAuthDashboard,
  ClientDashboard,
} from '@full-stack-challenge/shared-ui';
import { Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/auth/*" element={<ClientAuthDashboard />} />
          <Route path="/*" element={<ClientDashboard />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
