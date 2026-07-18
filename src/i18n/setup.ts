import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../../messages/en.json';
import te from '../../messages/te.json';
import hi from '../../messages/hi.json';
import { locales, defaultLocale } from './config';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      te: { translation: te },
      hi: { translation: hi },
    },
    supportedLngs: [...locales],
    fallbackLng: defaultLocale,
    interpolation: { escapeValue: false },
    detection: {
      // FR-002: priority — saved preference > browser language > English
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'LOCALE_PREFERENCE',
      caches: ['localStorage'],
    },
  });

export default i18n;
