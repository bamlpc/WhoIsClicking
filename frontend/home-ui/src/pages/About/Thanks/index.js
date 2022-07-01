import React from 'react';
import { useTranslation } from 'react-i18next'

const About = () => {

  //language manager
  const { t } = useTranslation()
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>{t('welcome_message')}</h1>
          <h1>TODO: this should be the Thanks to page</h1>
        </header>
      </div>
    );
}

export default About;