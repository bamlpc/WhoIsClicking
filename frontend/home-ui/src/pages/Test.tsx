//import { useTranslation } from 'react-i18next';
import Scan from './../components/Scanner'
import React from 'react'

const Test = () => {
  return (
    <div className="App-header">
      <h1> Press the button to start a self scan </h1>
      <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => Scan()}>Self Scan</button>
    </div>
  );
};

export default Test;
