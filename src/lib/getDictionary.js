import 'server-only';

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  fr: () => import('@/locales/fr.json').then((module) => module.default),
};

// The corrected function with a fallback
export const getDictionary = async (locale) => {
  // Check if the requested locale exists in our dictionaries,
  // otherwise, default to 'en'.
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};