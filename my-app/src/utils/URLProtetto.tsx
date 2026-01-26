import {Outlet, Navigate, useLocation} from "react-router-dom";

const ProtectedRoutes = () => {

    const location = useLocation();
    const isInternalNavigation = location.state?.daLink ? true : false;
    const isLoggedIn = localStorage.getItem("loggedUser") !== null;

    return isLoggedIn || isInternalNavigation ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;