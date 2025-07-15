'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Switch } from '@headlessui/react';

const LanguageSwitcher = ({ lang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isFrench = lang === 'fr';

  const handleLanguageChange = () => {
    const newLocale = isFrench ? 'en' : 'fr';
    // This logic correctly handles client-side navigation to the new language
    const newPath = pathname.replace(`/${lang}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center justify-center space-x-4 text-sm font-medium text-foreground/80 dark:text-dark-foreground/80">
      <span>EN</span>
      <Switch
        checked={isFrench}
        onChange={handleLanguageChange}
        // Changed: Use new color classes for consistency
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
      >
        <span className="absolute h-full w-full rounded-md bg-transparent" />
        <span
            className={`${
            isFrench ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
            } pointer-events-none absolute mx-auto h-full w-full rounded-full transition-colors duration-200 ease-in-out`}
        />
        <span
          className={`${
            isFrench ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out`}
        />
      </Switch>
      <span>FR</span>
    </div>
  );
};

export default LanguageSwitcher;