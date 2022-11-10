import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(()=> {})
    .catch(error => console.error(error))
  }

  return (
    <div className="navbar bg-info">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl text-white">JUSTICE HOUSE</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 text-white text-xl">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {user?.uid?(
              <>
              <Link className="ml-5" to='/myreviews'>My Reviews</Link>

              <Link className="ml-5" to='/addservice'>Add Services</Link>
              <button
              onClick={handleSignOut}
              className="btn btn-ghost mx-5 my-auto text-xl bg-red-600"
              >
              Log out
              </button>
              </>
            )
            :
             (
              <>
                <Link to='/login'>Login</Link>
              </>
             ) 
            }
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
