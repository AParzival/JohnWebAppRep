import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, Navigate } from "react-router-dom";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import Profile from "./components/layout/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Insta John</h1>
       <Router>
          <NavBar/>
       
      <Routes>
            <Route path="landing" element={<Landing />}/>
            <Route path="profile" element={<Profile />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
