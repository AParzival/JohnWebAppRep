import React, { useState } from 'react';
import '../../Styles.css';
import backgroundImage from '../../images/background2.jpg';

const Profile = () => {
  const SERVER_ROOT_URL = "https://john-webapp.azurewebsites.net/";

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    location: '',
    interest: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitData = async () => {
    console.log("DATA", formData);
    
    const resp = await fetch(SERVER_ROOT_URL + "/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await resp.json();
    console.log(json);
    alert(json.message);
  };

  return (
    <div className="formbox">
      <form>
        <h1 className="homeh1">Profile Sign Up</h1>

        <div className="input">
          <div className="inputfield">
            <input type="text" placeholder="First Name" id="firstName" onChange={handleInputChange} />
          </div>
          <div className="inputfield">
            <input type="text" placeholder="Last Name" id="lastName" onChange={handleInputChange} />
          </div>
          <div className="inputfield">
            <input type="text" placeholder="Location" id="location" onChange={handleInputChange} />
          </div>
          <div className="inputfield">
            <input type="text" placeholder="Interests" id="interest" onChange={handleInputChange} />
          </div>
          <div className="inputfield">
            <input type="email" placeholder="Email Address" id="email" onChange={handleInputChange} />
          </div>
          <div className="inputfield">
            <input type="password" placeholder="Password" id="password" onChange={handleInputChange} />
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
