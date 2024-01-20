// Navbar.js

import React from 'react';
import '../../Styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
