import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
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
