import {Routes, Route } from 'react-router-dom';
import {Home} from './routes/Home.js';
import {Generated} from './routes/Generated.js';
import React, { Component} from 'react';

class App extends Component {
  render() {
    return (
      <>
          <Routes>
            <Route path='/' element={<Home />}                /> 
            <Route path='/generated' element={<Generated />}  /> 
          </Routes>
      </>
    );
  }
}

export default App;
