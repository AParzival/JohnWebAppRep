// Profile.js

import React, { useState } from 'react';
import backgroundImage from '../../images/background2.jpg';
import User from '../../path/to/user.js'; // Update the path accordingly

const Profile = () => {
  const [formData, setFormData] = useState(new User('', '', '', '', '', ''));

  const SERVER_ROOT_URL = process.env.REACT_APP_SERVER_ROOT_URL || "https://john-webapp.azurewebsites.net/";

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const submitData = async () => {
    try {
      const resp = await fetch(SERVER_ROOT_URL + "/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await resp.json();
      console.log(json);
      alert(json.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error submitting data. Please try again.");
    }
  };

  return (
    <div className="formbox">
      <form>
        <h1 className="homeh1">Profile Sign Up</h1>

        <div className="input">
          <div className="inputfield">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              placeholder="Location"
              id="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              placeholder="Interests"
              id="interest"
              value={formData.interest}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputfield">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="subbutton">
            <input type="button" value="Submit" onClick={submitData} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
