const express = require('express');
const adminRouter = express.Router();
const dataChecker = require('../middlewares/data-checker');

const { getAllBooks, addBook, updateBookDetails, deleteBook } = require('../controller/admin.controller.js');

adminRouter.get('/all-books', getAllBooks);
adminRouter.post('/add-book', dataChecker , addBook);
adminRouter.patch('/update-book/:id', updateBookDetails);
adminRouter.delete('/delete-book/:id', deleteBook);

module.exports = adminRouter;