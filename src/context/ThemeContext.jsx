import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    try {
      const localTheme = localStorage.getItem('theme');
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      } else if (localTheme === 'light') {
        document.documentElement.classList.remove('dark');
        setDarkMode(false);
      } else {
        // Respect OS preference when theme isn't set
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          setDarkMode(true);
        }
      }
    } catch (err) {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
