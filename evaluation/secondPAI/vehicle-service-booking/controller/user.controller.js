const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 9;
const secretKey = process.env.SECRET_KEY || "password";
const UserModel = require('../model/user.model');

const register = (req, res) => {
  try {

    const { name, email, password, role } = req.body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } else {
        await UserModel.create({ name, email, role, password: hash });
        console.log("raw password", password, "hashed password", hash);
        res.status(201).json({ message: "Signup Sucess" });
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: "Something went wrong" });
        } else {
          if (result) {
            console.log(result);
            const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
            console.log(token);
            res.status(200).json({ message: "Login Success", user: user.username, token });
          } else {
            console.log(result);
            res.status(403).json({ message: "Wrong Password" });
          }
        }
      })
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, login };