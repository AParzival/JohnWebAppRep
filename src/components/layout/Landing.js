// LandingPage.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import personWithPhone from '../../images/persononphone.png';
import background2 from '../../images/background2.jpg';
import styles from './landingPage.css';

const LandingPage = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className={styles.landingContainer}>
            <header className={styles.header}>
                <div className={styles.welcomeBox}>
                    <h1>Welcome to Insta John</h1>
                </div>
                <div className={styles.description}>
                    Connecting with friends who know John
                </div>
                <div className={styles.imagesContainer}>
                    <img src={personWithPhone} className={styles.personOnPhone} alt='person with phone' />
                    <img src={background2} className={styles.landingBackground} alt='landing background' />
                </div>
            </header>
        </div>
    );
};

export default LandingPage;
