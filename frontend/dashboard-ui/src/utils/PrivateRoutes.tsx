import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

//TODO: WORK ON AUTH TO SETUP PRIVATE ROUTES WITH ROLES
const PrivateRoutes = () => {
  const { auth } = useAuth();

  return auth?.roles ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
