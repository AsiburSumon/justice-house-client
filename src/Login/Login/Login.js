import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form
     className="hero min-h-screen bg-base-200"
     style={{ backgroundImage: `url("https://prod-media-eng.dhakatribune.com/uploads/2019/08/high-court-2-1545807973809-1566489765847.jpg")` }}
     >
        <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
          <p className="py-6 text-2xl">
            <span className="text-red-300">
              Are you forgot to SignUp? Don't worry
            <br />
            Go to <Link className="text-lg text-orange-600 font-bold " to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
