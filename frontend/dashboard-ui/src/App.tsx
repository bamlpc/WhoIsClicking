import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/index';
import Login from './pages/login/index';
import Register from './pages/register/index';
import PrivateRoutes from './utils/PrivateRoutes';
import Recover from './pages/recover/index';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Dashboard />} path="/dashboard" exact />
      </Route>
      <Route element={<Login />} path="/login" exact />
      <Route element={<Register />} path="/register" exact />
      <Route element={<Recover />} path="/recover" exact />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
