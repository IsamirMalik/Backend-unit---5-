const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { bookService } = require('../controller/service.controller');

const ServiceRouter = express.Router();



ServiceRouter.post('/book' , authMiddleware(['user', 'admin']) , bookService);

module.exports = ServiceRouter;