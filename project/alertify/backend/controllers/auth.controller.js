const UserModel = require('../models/user.model');
const { generateToken } = require('../utils/jwt');
const validator = require('validator');



const register = async (req, res, next) => {

  try {
    const { name, email, password, phone, role , address } = req.body;

    if (!name || !email || !password || !phone || !role || !address) {
      return res.status(400).json({ "message": "Insufficient data , All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ "message": "Invalid email" });
    }

    if (!validator.isMobilePhone(phone)) {
      return res.status(400).json({ "message": "Invalid phone number" });
    }

    if (password.length < 6) {
      return res.status(400).json({ "message": "Password must be at least 6 characters" });
    }

    const user = await UserModel.create({ name, email, password, phone, address , role: role || 'user' });

    const token = generateToken(user._id);

    res.status(200).json({ "message": "User registered successfully", "token": token, "user": user });
  } catch (error) {
    next(error);
  }

};

const login = async (req, res, next) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ "message": "Insufficient data , All fields are required" });
    }

    const user = await UserModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ "message": "Invalid email or password" });
    };

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ "message": "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ "message": "User logged in successfully", "token": token, "user": user });
  } catch (error) {
    next(error);

  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ "message": "User not found" });
    }
    res.status(200).json({ "message": "User found", "user": user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getMe };