const express = require('express');
const readerRouter = express.Router();
const { getAllBooks , borrowBook , returnBook } = require('../controller/reader.controller');  

readerRouter.get('/all-books', getAllBooks);
readerRouter.put('/borrow-book/:id', borrowBook);
readerRouter.put('/return-book/:id', returnBook);

module.exports = readerRouter;