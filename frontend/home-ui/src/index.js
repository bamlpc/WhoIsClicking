import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import App from './App';
import {AuthProvider} from './context/AuthProvider.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'flag-icon-css/css/flag-icon.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


i18next
  .use(HttpApi)                                           //Utility that allows fetching language files
  .use(LanguageDetector)                                  //Utility to automatically search for user language
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr', 'es', 'it', 'de'],  //Language array where we choose/match
    fallbackLng: 'en',                                    //default language in case not supported one
    debug: false,
    // Options for language detector
    detection: {                                          //Detection of the user's language
      order: ['path', 'cookie', 'htmlTag'],               //Priority order
      caches: ['cookie'],                                 //Where store it
    },
    react: { useSuspense: false },
    backend: {                                              //
      loadPath: '/assets/locales/{{lng}}/translation.json', //Path where it'll look for translations (This could be also a backend path)
    },
  })
 

  //Something to show while fetching languages
  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )
 
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <useSuspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </useSuspense>
);
