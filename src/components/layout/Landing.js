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
            <header className="App-header">
                <div className="welcomeBox">
                    <h1>
                        Insta John Main Page
                    </h1>
                </div>
                <div className="discription">
                    This site is for people who know John
                </div>
                <div className="Landingbackground">
                    <img src={backGround2} alt='landing background'/>
                    <img src={personWithPhone} className='persononphone' alt='person with phone'/>
                </div>
            </header>
        </Fragment>
    );
};

export default Landing;
