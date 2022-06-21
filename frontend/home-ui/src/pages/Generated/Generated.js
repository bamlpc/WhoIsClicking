import React from 'react';
import '../../App.css';
import {Hunter, Prey} from './components/HunterPreyLinkScreen.js';
//NECEITA RECIBIR EL JSON DEL RESPONSE
export const Generated = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          {Hunter(props)}
          {Prey(props)}
        </header>
      </div>
    );

};