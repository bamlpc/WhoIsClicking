import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './commons/Footer/index.js';
import Navbar from './commons/Navbar/index.js';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import About from './pages/About/index.js';
import Thanks from './pages/About/Thanks/index.js';
import AboutUs from './pages/About/Us/index.js';
import AboutWic from './pages/About/Wic/index.js';
import Disclaimer from './pages/Disclaimer/index.js';
import Generated from './pages/Generated/index.js';
import Home from './pages/Home/index.js';
import Hunter from './pages/Hunter/index.js';
import Layout from './pages/Layout.js';
import LinksCreation from './pages/LinksCreation/index.js';
import Login from './pages/Login/index.js';
import Logout from './pages/Logout/index.js';
import QrGeneration from './pages/QrGeneration/index.js';
import Register from './pages/Register/index.js';
import Guest from './pages/User/Guest/index.js';
import User from './pages/User/index.js';

const ROLES = [33, 79];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/*to give format to every route*/}
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" exact element={<Home />} />
          <Route path="about" exact element={<About />} />
          <Route path="aboutus" exact element={<AboutUs />} />
          <Route path="aboutwic" exact element={<AboutWic />} />
          <Route path="thanksto" exact element={<Thanks />} />
          <Route path="Disclaimer" exact element={<Disclaimer />} />
          <Route path="guest" exact element={<Guest />} />
          <Route path="register" exact element={<Register />} />
          <Route path="login" exact element={<Login />} />
          <Route path="unauthorized" exact element={<Unauthorized />} />

          {/* Users only */}
          <Route element={<RequireAuth allowedRoles={[ROLES]} />}>
            <Route path="user" exact element={<User />} />
            <Route path="logout" exact element={<Logout />} />
            <Route path="linkscreation" exact element={<LinksCreation />} />
            <Route path="generated" exact element={<Generated />} />
            <Route path="qrgeneration" exact element={<QrGeneration />} />
            <Route path="hunter" exact element={<Hunter />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
