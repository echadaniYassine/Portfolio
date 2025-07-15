'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lang = pathname.split('/')[1];
  const [isFrench, setIsFrench] = useState(lang === 'fr');

  useEffect(() => {
    setIsFrench(lang === 'fr');
  }, [lang]);

  const toggleLanguage = () => {
    const newLocale = isFrench ? 'en' : 'fr';
    const newPath = pathname.replace(`/${lang}`, `/${newLocale}`);
    const query = searchParams.toString();
    const finalUrl = query ? `${newPath}?${query}` : newPath;

    router.push(finalUrl);
    setIsFrench(!isFrench);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center w-10 h-10 text-purple-700 font-semibold shadow-md transition-colors duration-300"
    >
      {isFrench ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
