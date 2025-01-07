import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
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