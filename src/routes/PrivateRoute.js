import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UserContext, { AuthContext } from '../components/Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user , loading } = UserContext(AuthContext);
    const location = useLocation();

    if(loading){
        console.log('Yes loasding is found');
        return <div>Loading.....</div>
    }


    if(user && user.uid) {
        return children;
    } 
    return <Navigate to='/login' state={{ from: location}} replace >  </Navigate>
    
};

export default PrivateRoute;