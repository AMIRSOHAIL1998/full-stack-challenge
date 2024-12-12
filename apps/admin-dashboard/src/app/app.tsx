import './app.module.css';
import NxWelcome from './nx-welcome';
import { useTheme } from '@full-stack-challenge/shared-theme';

export function App() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NxWelcome title="admin-dashboard" />
    </div>
  );
}

export default App;
