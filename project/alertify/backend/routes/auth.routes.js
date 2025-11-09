const express = require('express');
const authRouter = express.Router();
const { register, login, getMe } = require('../controllers/auth.controller')

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/me', getMe);

module.exports = authRouter;

