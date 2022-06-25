import React from 'react';
import { useTranslation } from 'react-i18next'
import '../../App.css';

const Home = () => {
  const { t } = useTranslation()

    return (
      <div className="App">
        <header className="App-header">
          <h1>{t('welcome_message')}</h1>
          <h1>TODO: this should be the home page</h1>
        </header>
      </div>
    );
}

export default Home;