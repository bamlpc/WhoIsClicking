import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {

    const { auth } = useAuth();
    const location = useLocation();

    return (
        //if the user is logged in and don't have the necessary permission
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                //if the user is login and dont have the necesary permission
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                //save the location from where the user came from
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;