import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWithProvider = () => {
    const {providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from , { replace:true })
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div className='text-center text-3xl'>
            <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button>
        </div>
    );
};

export default LoginWithProvider;