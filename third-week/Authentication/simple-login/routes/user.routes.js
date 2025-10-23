const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const saltRounds = 9;
var jwt = require('jsonwebtoken');
const UserRouter = express.Router();


UserRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } else {

        await UserModel.create({ username, email, password: hash });
        res.status(201).json({ message: "Signup Sucess" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

UserRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User Not Found, Please Signup" });
    } else {
      let hash = user.password;
      bcrypt.compare(password, hash).then(function (result) {
        if (result == true) {
          var token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY);
          res.status(200).json({ message: "Login Sucesss", token });
        } else {
          res.status(403).json({ message: "Wrong Password" });
        }
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
module.exports = UserRouter;
