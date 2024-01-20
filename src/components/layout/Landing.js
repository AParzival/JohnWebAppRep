import React from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../../images/logo1.jpg';
import personWithPhone from '../../images/persononphone.png';
import backGround2 from '../../images/background2.jpg';
import '../../Styles.css';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="landing-container">
      <h1>Insta John Main Page</h1>
      <p>This site is for people who know John</p>
      <div>
        <img src={personWithPhone} className="persononphone" alt="person with phone" />
        <img src={backGround2} className="landing-background" alt="landing background" />
      </div>
    </div>
  );
};

export default Landing;
