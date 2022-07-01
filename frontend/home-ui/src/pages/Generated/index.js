import React from 'react';
import { useTranslation } from 'react-i18next'

import { Hunter, Prey } from './components/HunterPreyLinkScreen.js';

const Generated = () => {

  //language manager
  const { t } = useTranslation()
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>{t('welcome_message')}</h1>
          {Hunter("its")}
          {Prey("afailure")}
        </header>
      </div>
    );

};

export default Generated;