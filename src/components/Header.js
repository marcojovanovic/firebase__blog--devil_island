import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signUp">
            SignUp
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            SignIn
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createBlog">
            CreateBlog
          </Link>
        </li>
        <li className="nav-item"></li>
      </ul>
    </div>
  );
}

export default Header;
