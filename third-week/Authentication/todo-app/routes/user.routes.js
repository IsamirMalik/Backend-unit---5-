const express = require('express');
const bycrypt = require('bcrypt');
const saltRounds = 6; // must be between 10 - 15
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secretKey = "password";
const someOtherPlainText = "not_a_password";

const UserRouter = express.Router();

UserRouter.post('/signup', (req, res) => {
    try {
        const { username, email, password } = req.body;
        bycrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                res.status(500).json({ message: "Something went wrong" });
            } else {
                await UserModel.create({ username, email, password: hash });
                console.log("raw password", password, "hashed password", hash);
                res.status(201).json({ message: "Signup Sucess" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

UserRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            bycrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(500).json({ message: "Something went wrong" });
                } else {
                    if (result) {
                        console.log(result);
                        const token = jwt.sign({ userId: user._id }, secretKey , { expiresIn: '1h' });
                        console.log(token);
                        res.status(200).json({ message: "Login Success", user: user.username, token});
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
});

module.exports = UserRouter;