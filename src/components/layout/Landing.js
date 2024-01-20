// Landing.jsx

import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import personWithPhone from '../../images/persononphone.png';
import backGround2 from '../../images/background2.jpg';
import '../../Styles.css';

const Landing = ({ isAuthenticated }) => {
    console.log("landing");
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Fragment>
            <div className="Landing-container">
                <header className="Landing-header">
                    Insta John Main Page
                </header>
                <div className="Landing-description">
                    This site is for people who know John
                </div>
                <div className="Landing-images">
                    <img src={personWithPhone} className='persononphone' alt='person with phone' />
                    <img src={backGround2} className='Landingbackground' alt='landing background' />
                </div>
            </div>
        </Fragment>
    );
};

export default Landing;
