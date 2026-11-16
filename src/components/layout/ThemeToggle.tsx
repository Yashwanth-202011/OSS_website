'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as
      'dark' | 'light' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      const prefersLight = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches;
      const initialTheme = prefersLight ? 'light' : 'dark';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const label =
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center p-2 rounded-sm text-text hover:bg-surface-2 border border-border transition-colors focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 min-w-[44px] min-h-[44px] cursor-pointer"
    >
      {mounted ? (
        theme === 'dark' ? (
          <Sun className="w-5 h-5 text-warn" aria-hidden="true" />
        ) : (
          <Moon className="w-5 h-5 text-brand" aria-hidden="true" />
        )
      ) : (
        <span className="w-5 h-5 block" aria-hidden="true" />
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
