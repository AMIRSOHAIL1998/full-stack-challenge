import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { webStore, webPersistor } from '@full-stack-challenge/store';
import { ThemeProvider, lightTheme } from '@full-stack-challenge/shared-theme';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={webStore}>
        <PersistGate loading={null} persistor={webPersistor}>
          <ThemeProvider defaultMode="light">
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
