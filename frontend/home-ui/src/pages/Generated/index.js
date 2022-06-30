import React from 'react';
import { Hunter, Prey } from './components/HunterPreyLinkScreen.js';

const Generated = () => {

    return (
      <div className="App">
        <header className="App-header">
          {Hunter("its")}
          {Prey("afailure")}
        </header>
      </div>
    );

};

export default Generated;