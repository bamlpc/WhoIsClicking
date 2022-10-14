import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './layout/simple';
import Link from './pages/Links';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import Login from './pages/login';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="link" element={<Link />} />
          <Route path="contact" element={<Contact />} />
          <Route path="test" element={<Test />} />
          <Route path="login" element={<Login />} />

          <Route path="disclaimer" element={<Disclaimer />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
