const express = require('express');
const UserRouter = express.Router();
const { register , login } = require('../controller/user.controller');
const  authMiddleware  = require('../middlewares/auth.middleware');



UserRouter.get('/test' , (req , res) => {
  res.send('This is user route')
}); 

// Register Route
UserRouter.post('/register',  register);

// Login Route
UserRouter.post('/login', login);



module.exports = UserRouter;