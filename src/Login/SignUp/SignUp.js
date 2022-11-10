import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import LoginWithProvider from '../LoginWithProvider/LoginWithProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password, name)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate(from, { replace: true })
        })
        .catch( error => {
            console.error(error);
            setError(error.message)
        })

    }

    return (
        <form onSubmit={handleSubmit} 
     className="hero min-h-screen bg-base-200"
     style={{ backgroundImage: `url("https://prod-media-eng.dhakatribune.com/uploads/2019/08/high-court-2-1545807973809-1566489765847.jpg")` }}
     >
        <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Sign Up here</h1>
          <p className="py-6 text-2xl">
            <span className="text-red-300">
              Already have an account?
            <br />
            Go to <Link className="text-lg text-orange-600 font-bold " to="/login">Login</Link>
            </span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div>
                <LoginWithProvider></LoginWithProvider>
            </div>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    </form>
    );
};

export default SignUp;