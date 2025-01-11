import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import { Authcontext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    if(loading) {
        return <Loading></Loading>
    }
    if(user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;