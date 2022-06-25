import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Generated from './pages/Generated/index.js';
import Hunter from './pages/Hunter/index.js';
import LinksCreation from './pages/LinksCreation/index.js';
import WebScrapper from './pages/WebScrapper/index.js'
import Login from './pages/Login/index.js';
import About from './pages/About/index.js';
import Navbar from './commons/Navbar/index.js';
import FooterContainer from './commons/Footer/index.js'
import './App.css';

function App () {

    return (
      <>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path='/'               exact element={<Home />}         /> 
              <Route path='/linkscreation'  exact element={<LinksCreation />}/> 
              <Route path='/webscrapper'    exact element={<WebScrapper />}  /> 
              <Route path='/about'          exact element={<About />}        /> 
              <Route path='/login'          exact element={<Login />}        /> 
              <Route path='/generated'      exact element={<Generated />}    /> 
              <Route path='/hunter:id'      exact element={<Hunter />}       />
            </Routes>
          </div>
          <FooterContainer />
      
      </>
    );
}

export default App;
