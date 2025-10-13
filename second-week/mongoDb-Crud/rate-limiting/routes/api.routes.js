const express = require('express');
const apiRouter = express.Router();

const limiter = require('../middlewares/rate-limiter');


apiRouter.get('/public', (req, res) => {
    res.json({ "message": "This is a Public Endpoint" })
})

apiRouter.get('/limited' , limiter , (req, res) => {
    res.json({ "message": "You have access to this Limited Endpoint" })
})
module.exports = apiRouter;