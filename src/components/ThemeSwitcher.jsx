'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center justify-center">
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="flex items-center justify-center w-full p-2 rounded-lg bg-gray-200 dark:bg-dark-border"
            aria-label="Toggle Theme"
        >
            <SunIcon className={`h-6 w-6 text-amber-500 transition-transform duration-500 ${!isDark ? 'scale-100' : 'scale-0'}`} />
            <MoonIcon className={`h-6 w-6 text-slate-400 absolute transition-transform duration-500 ${isDark ? 'scale-100' : 'scale-0'}`} />
        </button>
    </div>
  );
};

export default ThemeSwitcher;