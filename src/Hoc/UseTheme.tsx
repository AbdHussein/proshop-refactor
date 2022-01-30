import { useEffect, useState, useCallback } from 'react';

type TTheme = 'light' | 'dark';
const useTheme = (): {
  theme: TTheme;
  setToggle: () => void;
} => {
  const [theme, setTheme] = useState<TTheme>('light');

  const setToggle = useCallback(() => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme as TTheme);
    }
  }, [theme]);

  return { theme, setToggle };
};

export default useTheme;
