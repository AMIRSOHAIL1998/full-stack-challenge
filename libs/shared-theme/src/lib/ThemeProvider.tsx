import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './themes';

interface ThemeContextProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  defaultMode?: 'light' | 'dark';
}> = ({ children, defaultMode = 'light' }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(defaultMode);

  const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = mode === 'light' ? lightTheme : darkTheme;

  // Sync CSS variables for global styles
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', theme.palette.background.default);
    root.style.setProperty('--color', theme.palette.text.primary);
    root.style.setProperty('--primary', theme.palette.primary.main);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
