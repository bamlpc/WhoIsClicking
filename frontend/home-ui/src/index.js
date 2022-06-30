import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {AuthProvider} from './context/AuthProvider.js'

import './index.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'flag-icon-css/css/flag-icon.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr', 'es', 'it', 'de'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
 

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )
 
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <useSuspense fallback={loadingMarkup}>
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  </useSuspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
