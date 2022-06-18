import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/Home.js';
import {Generated} from './pages/Generated/Generated.js';
import {Hunter} from './pages/Hunter/Hunter.js';
import {LinksCreation} from './pages/LinksCreation/LinksCreation.js';
import {Login} from './pages/Login/Login.js';
import {About} from './pages/About/About.js';
import Navbar from './commons/Navbar/index.js';

function App () {

    return (
      <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/'               exact element={<Home />}         /> 
              <Route path='/linkscreation'  exact element={<LinksCreation />}/> 
              <Route path='/login'          exact element={<Login />}        /> 
              <Route path='/about'          exact element={<About />}        /> 
              <Route path='/generated'      exact element={<Generated />}    /> 
              <Route path='/hunter:id'     exact element={<Hunter />}       />
            </Routes>
          </div>

      </>
    );
}

export default App;
