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
import {FooterContainer as Footer} from './commons/Footer/index.js';
import Layout from './pages/Layout.js';
import './App.css';

import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';

const ROLES = [33, 79]


function App () {

    return (
      <>
          <Navbar />
            <Routes>
              {/*to give format to every route*/}
              <Route path='/' element={<Layout />}> 
                {/* public routes */}
                <Route path='/'               exact element={<Home />}          /> 
                <Route path='about'           exact element={<About />}         /> 
                <Route path='register'        exact element={<Register />}      /> 
                <Route path='login'           exact element={<Login />}         /> 
                <Route path="unauthorized"    exact element={<Unauthorized />}  />

                {/* Users only */}
                <Route element={<RequireAuth allowedRoles={[ROLES]} />}>
                  <Route path='linkscreation'  exact element={<LinksCreation />}/> 
                  <Route path='webscrapper'    exact element={<WebScrapper />}  /> 
                  <Route path='generated'      exact element={<Generated />}    /> 
                  <Route path='hunter'         exact element={<Hunter />}       />
                </Route>

                {/* catch all */}
                <Route path='*' element={<Missing />} />
              </Route>
            </Routes>
          <Footer />
      
      </>
    );
}

export default App;
