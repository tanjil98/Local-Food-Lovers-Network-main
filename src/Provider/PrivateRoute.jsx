import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    // console.log(user);
    if (loading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;