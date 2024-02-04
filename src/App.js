import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, Navigate } from "react-router-dom";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import Profile from "./components/layout/Profile";
import Profiles from "./components/layout/Profiles";
import PostForm from "./components/layout/PostForm";
import Posts from "./components/layout/Posts";
import Post from "./components/layout/Post";
import './App.css';

function App() {
  localStorage.setItem("APP_SERVER_ROOT", "http://localhost:8080");
  return (
    <div className="App">
     <h1>Insta John</h1>
       <Router>
          <NavBar/>
       
      <Routes>
            <Route path="landing" element={<Landing />}/>
            <Route path="profile" element={<Profile />} >
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="viewPost/:id" element={<Post />} />
            <Route path="profiles" element={<Profiles />} />
        <Route path="post" element={<PostForm />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
