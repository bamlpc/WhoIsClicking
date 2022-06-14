import React, { Component} from 'react';
import {Routes, Route } from 'react-router-dom';
import {Home} from './routes/Home.js';
import {Generated} from './routes/Generated.js';
import {Hunter} from './routes/Hunter.js';

class App extends Component {
  render() {
    return (
      <>
          <Routes>
            <Route path='/' element={<Home />}                /> 
            <Route path='/generated' element={<Generated />}  /> 
            <Route path='/hunter/:id' element={<Hunter />}    />
          </Routes>
      </>
    );
  }
}

export default App;
