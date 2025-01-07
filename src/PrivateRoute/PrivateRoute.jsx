import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    if(loading) {
        return
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;