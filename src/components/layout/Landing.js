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
          Hello world
        </h1>
        </div>
        <div className="discription">
          This website for all of Tom's Friends to connect with each other.
          </div>
       <div>   
       <img src={personWithPhone} className='persononphone' alt='person with phone'/>
       <img src={backGround2} className='Landingbackground' alt='landing background'/>
       </div>
      </header>
		</Fragment>
	);
};


export default Landing;

