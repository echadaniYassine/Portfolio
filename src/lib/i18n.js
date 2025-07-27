// lib/i18n.js
const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  fr: () => import('@/locales/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    return dictionaries.en() // fallback to English
  }
  return dictionaries[locale]()
}

export const defaultLocale = 'en'
export const locales = ['en', 'fr']