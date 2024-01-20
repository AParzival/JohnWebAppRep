import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import '../../Styles.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <img src={logo} className="headerlogo" alt="logo in header" />
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
