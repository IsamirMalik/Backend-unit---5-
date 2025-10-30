const express = require('express');
const bycrypt = require('bcrypt');
const saltRounds = 10;
const myplainText = "password";
const someOtherPlainText = "not_a_password";

const UserRouter = express.Router();

UserRouter.post('/signup', (req, res) => {
    try {
        const { username, email, password } = req.body;
        bycrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                res.status(500).json({ message: "Something went wrong" });
            } else {
                // UserModel.create({ username, email, password: hash });
                console.log("raw password", password , "hashed password", hash);  
                res.status(201).json({ message: "Signup Sucess" });
            }
        });
    } catch (error) {
     res.status(500).json({ message: "Something went wrong" });   
    }
});

module.exports = UserRouter;