const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { bookService , completed } = require('../controller/service.controller');

const ServiceRouter = express.Router();



ServiceRouter.post('/book' , authMiddleware(['user', 'admin']) , bookService);

ServiceRouter.patch('/complete' , authMiddleware(['admin']) , completed);

module.exports = ServiceRouter;