import React from 'react';
import '../App.css';
import {Hunter, Prey} from '../components/HunterPreyLinkScreen.js';

const response_test = {"hunter":"94042e7c1cb9132e26c8bc631d3e45b452254fe7f35cc7b6e3","prey":"8acf2932f75b4a6dd62ec2bd9034d00f7f2aa8033e33b3bb1a","action":""}

export const Generated = () => {
    return (
      <div className="App">
        <header className="App-header">
          {Hunter(response_test.hunter)}
          {Prey(response_test.prey)}
        </header>
      </div>
    );
  }