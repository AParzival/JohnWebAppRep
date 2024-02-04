const port = process.env.port || 8080; // port update
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const express = require("express");
const session = require('express-session');
const path = require("path");
const Profile = require('./model/Profile');
const Post = require('./model/Post');
const app = express();
app.use(session({ secret: 'XASDASDA' }));

const cors = require("cors");
app.use(express.json());
app.use(cors());

const GC_RELEASE = "2024-01-13";
//const MongoURL = "mongodb://localhost:27017/tom";
//const MongoURL = "mongodb+srv://appuser:AppData2022@cluster0.aga82.mongodb.net/tombook";
const MongoURL="mongodb+srv://admin:Test2024@cluster0.skxw5hl.mongodb.net/johnbook"
mongoose.connect(MongoURL);

app.get("/release", (req, res) => {
  ssn = req.session;
  res.send(GC_RELEASE);
});
app.post("/profile", (req, res) => {
    const data = req.body;
    console.log("profile:", data);
    Profile.create(data);
    res.send({status:1, message:"Profile Created"});
})
app.get("/profiles", async (req, res) => {
  const data = await Profile.find({});
  console.log(data);
    
  res.send(data);
});
app.get("/profile/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Profile.findById(id);
    
  res.send(data);
});
app.post("/post", (req, res) => {
  const data = req.body;
  console.log("profile:", data);
  Post.create(data);
  res.send({status:1, message:"Post Created"});
})
app.get("/posts", async (req, res) => {
  const data = await Post.find({});
  console.log(data);
    
  res.send(data);
});
app.get("/post/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Post.findById(id);
    
  res.send(data);
});
app.use(express.static("../src/build"));
app.get("*", (req, res) => {
  console.log("ROOT");
  res.send(__dirname,  "index.html");
})
app.listen(port, () => {
  console.log("listening on port:", port);
});




