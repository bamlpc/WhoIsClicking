import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/index.js';
import Generated from './pages/Generated/index.js';
import Hunter from './pages/Hunter/index.js';
import LinksCreation from './pages/LinksCreation/index.js';
import Contact from './pages/Contact/index.js'
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import About from './pages/About/index.js';
import AboutUs from './pages/About/Us/index.js';
import AboutWic from './pages/About/Wic/index.js';
import Thanks from './pages/About/Thanks/index.js';
import User from './pages/User/index.js'
import Guest from './pages/User/Guest/index.js'
import Navbar from './commons/Navbar/index.js';
import {FooterContainer as Footer} from './commons/Footer/index.js';
import Layout from './pages/Layout.js';
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
                <Route path='aboutus'         exact element={<AboutUs />}       /> 
                <Route path='aboutwic'        exact element={<AboutWic />}      /> 
                <Route path='thanksto'        exact element={<Thanks />}        /> 
                <Route path='contact'         exact element={<Contact />}       />
                <Route path='guest'           exact element={<Guest />}         />
                <Route path='register'        exact element={<Register />}      /> 
                <Route path='login'           exact element={<Login />}         /> 
                <Route path="unauthorized"    exact element={<Unauthorized />}  />

                {/* Users only */}
                <Route element={<RequireAuth allowedRoles={[ROLES]} />}>
                  <Route path='linkscreation'  exact element={<LinksCreation />}/> 
                  <Route path='generated'      exact element={<Generated />}    /> 
                  <Route path='user'           exact element={<User />}         /> 
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
