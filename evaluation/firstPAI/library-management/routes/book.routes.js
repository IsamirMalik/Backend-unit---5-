const express = require('express');
const bookRouter = express.Router();

const bookController = require('../controllers/book.controller');

bookRouter.get('/books', bookController.getAllBooks);
bookRouter.get('/books/:id', bookController.getBookById);
bookRouter.post('/books', bookController.createBook);
bookRouter.put('/books/:id', bookController.updateBook);
bookRouter.delete('/books/:id', bookController.deleteBook);

module.exports = bookRouter;

