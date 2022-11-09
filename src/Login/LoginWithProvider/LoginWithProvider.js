import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const LoginWithProvider = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
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