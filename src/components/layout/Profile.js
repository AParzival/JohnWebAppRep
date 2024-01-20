// Profile.js

import React from 'react';
import '../../Styles.css';
import '../../scripts/profile.js';
import backgroundImage from '../../images/background2.jpg';
import Navbar from './NavBar';


const Profile = () => {
    const SERVER_ROOT_URL = "https://john-webapp.azurewebsites.net/";

    const submitData = async () => {
        const data = {
            lastName: document.getElementById("lastName").value,
            firstName: document.getElementById("firstName").value,
            location: document.getElementById("location").value,
            interest: document.getElementById("interest").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        console.log("DATA", data);

        const resp = await fetch(SERVER_ROOT_URL + "/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const json = await resp.json();
        console.log(json);
        alert(json.message);
    }

    return (
        <div>
            <Navbar />
            <div className="profileContainer">
                <img src={backgroundImage} className="profileBackground" alt="profile background" />
                <div className="profileContent">
                    <h1 className="profileTitle">Profile Page</h1>
                    <div className="formbox">
                        <form>
                            <h1 className="homeh1">Profile Sign Up</h1>
                            <div className="input">
                                <div className="inputfield">
                                    <input type="text" placeholder="First Name" id="firstName" />
                                </div>
                                <div className="inputfield">
                                    <input type="text" placeholder="Last Name" id="lastName" />
                                </div>
                                <div className="inputfield">
                                    <input type="text" placeholder="Location" id="location" />
                                </div>
                                <div className="inputfield">
                                    <input type="text" placeholder="Interests" id="interest" />
                                </div>
                                <div className="inputfield">
                                    <input type="email" placeholder="Email Address" id="email" />
                                </div>
                                <div className="inputfield">
                                    <input type="password" placeholder="Password" id="password" />
                                </div>
                                <div className="subbutton">
                                    <input type="button" value="Submit" onClick={submitData} />
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Additional profile-related components can be added here */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
