import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { TailSpin } from 'react-loader-spinner';

const Guest = () => {
  //language manager
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome_message')}</h1>
        <h1>TODO: this should be the Guest page</h1>
        <TailSpin color="#18ffff" height={80} width={80} />
      </header>
    </div>
  );
};

export default Guest;
