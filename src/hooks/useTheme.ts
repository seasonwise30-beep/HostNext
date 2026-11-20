import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('hostnext-theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('hostnext-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}