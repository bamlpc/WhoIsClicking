import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icon.min.css';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


i18next
  .use(initReactI18next)
  .use(HttpApi) //Utility that allows fetching language files
  .use(LanguageDetector) //Utility to automatically search for user language
  .init({
    supportedLngs: ['en', 'ar', 'fr', 'es', 'it', 'de'], //Language array where we choose/match
    fallbackLng: 'en', //default language in case not supported one
    debug: false,
    // Options for language detector
    detection: {
      //Detection of the user's language
      order: ['path', 'cookie', 'htmlTag'], //Priority order
      caches: ['cookie'], //Where store it
    },
    react: { useSuspense: false },
    backend: {
      //
      loadPath: '/assets/locales/{{lng}}/translation.json', //Path where it'll look for translations (This could be also a backend path)
    },
  });

  export default i18next;