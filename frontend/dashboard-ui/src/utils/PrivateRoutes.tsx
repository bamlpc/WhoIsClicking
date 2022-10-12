import { Navigate, Outlet } from 'react-router-dom';

//TODO: WORK ON AUTH TO SETUP PRIVATE ROUTES
const PrivateRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
