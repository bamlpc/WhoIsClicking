import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Generated from './pages/Generated/index.js';
import Hunter from './pages/Hunter/index.js';
import LinksCreation from './pages/LinksCreation/index.js';
import WebScrapper from './pages/WebScrapper/index.js'
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import About from './pages/About/index.js';
import Navbar from './commons/Navbar/index.js';
import FooterContainer from './commons/Footer/index.js'
import './App.css';

import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';

const ROLES = {
  'User': 79,
  'Admin': 33
}

function App () {

    return (
      <>
          <Navbar />
          <div className="App">
            <Routes>
              {/* public routes */}
              <Route path='/'               exact element={<Home />}         /> 
              <Route path='/about'          exact element={<About />}        /> 
              <Route path='/register'       exact element={<Register />}     /> 
              <Route path='/login'          exact element={<Login />}        /> 
              <Route path="unauthorized"    exact element={<Unauthorized />} />

              {/* Users only */}
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path='/linkscreation'  exact element={<LinksCreation />}/> 
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path='/webscrapper'    exact element={<WebScrapper />}  /> 
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path='/generated'      exact element={<Generated />}    /> 
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path='/hunter:id'      exact element={<Hunter />}       />
              </Route>

              {/* catch all */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </div>
          <FooterContainer />
      
      </>
    );
}

export default App;
