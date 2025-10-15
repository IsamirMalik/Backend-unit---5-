const express = require('express');
const authorRouter = express.Router();

const {getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor} = require('../controllers/author.controller');

authorRouter.get('/authors', getAllAuthors);
authorRouter.get('/authors/:id', getAuthorById);
authorRouter.post('/authors', createAuthor);
authorRouter.put('/authors/:id', updateAuthor);
authorRouter.delete('/authors/:id', deleteAuthor);

module.exports = authorRouter;