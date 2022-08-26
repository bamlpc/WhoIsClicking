import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";

import Layout from './layout/simple';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Login from './pages/login'
import Disclaimer from './pages/Disclaimer';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home /> }/>
          <Route path="about" element={ <About /> }/>
          <Route path="contact" element={ <Contact /> }/>
          <Route path="test" element={ <Test /> }/>
          <Route path="login" element={ <Login /> }/>

          <Route path="disclaimer" element={ <Disclaimer /> }/>

          <Route path="*" element={ <Navigate replace to="/" /> }/>
        </Route>
      </Routes>
      
      </div>
  );
}

export default App;
