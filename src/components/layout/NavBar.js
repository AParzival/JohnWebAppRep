
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import '../../Styles.css';
const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
          <ul>
          
            <img src={logo} className='headerlogo' alt='logo in header'/>
            <li><Link to="/landing">Landing</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/posts">Posts</Link></li>
            </ul>
          </nav>
          
        </div>
    )
}
export default NavBar;