import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return(
            <p className='text-green-500 text-xl font-bold text-center mt-5'>Loading....</p>
        )
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children;
};

export default PrivateRoute;