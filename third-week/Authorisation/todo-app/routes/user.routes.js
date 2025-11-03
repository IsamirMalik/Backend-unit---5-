const express = require('express');
const bycrypt = require('bcrypt');
const saltRounds = 6; // must be between 10 - 15
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secretKey = "password";
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
// const someOtherPlainText = "not_a_password";

const UserRouter = express.Router();

UserRouter.post('/signup', (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        bycrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                res.status(500).json({ message: "Something went wrong" });
            } else {
                await UserModel.create({ username, email, role, password: hash });
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
});


// Github Auth

passport.use(new GitHubStrategy({
    clientID: 'Ov23limgqeiiFjmzU13N',
    clientSecret: 'e52233d9d3158cae69885f900a1a39899018e90d',
    callbackURL: "http://localhost:3000/users/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {

        console.log(profile);
        // User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return done(null, profile);
        // });
    }
));

// Calls Github login / Auth page
UserRouter.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }));

// Callback route in case of success / failure
UserRouter.get('/auth/github/callback',
    passport.authenticate('github', { session: false, failureRedirect: '/login' }),
    async function (req, res) {
        // Successful authentication, redirect home.
        // res.redirect('/');
        console.log(req.user.id);
        const gitHubUserId = req.user.id;
        const user = await UserModel.findOne({ profileId: gitHubUserId });
        if (!user) {
            const newUser = await UserModel.create({ profileId: gitHubUserId });
            var token = jwt.sign({ userId: newUser._id, role: newUser.role }, secretKey, { expiresIn: '1h' });
            res.status(200).json({ message: "Login Success", user: req.user.username , token});
        }else {
            var token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
            res.status(200).json({ message: "Login Success", user: req.user.username , token});
            
        }
    });

module.exports = UserRouter;