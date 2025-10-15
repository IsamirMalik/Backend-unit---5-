const bookModel = require('../models/book.model');
const AuthorModel = require('../models/author.model');


const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find().populate('author');
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

const getBookById = async (req, res) => {
    try {
        let id = req.params.id
        const book = await bookModel.findById(id).populate('author');
        res.status(200).json({'book': book});
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

const createBook = async (req, res) => {
    try {
        let bookInfo = req.body
        const book = await bookModel.create(bookInfo).save();
        res.status(201).json({ 'message': 'Book created successfully' , book });
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

const updateBook = async (req, res) => {
    try {
        let id = req.params.id;
        let newInfo = req.body
        const book = await bookModel.findByIdAndUpdate(id, newInfo, { new: true });
        res.status(200).json({ 'message': 'Book updated successfully' , book });
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookModel.findByIdAndDelete(bookId);
        res.status(200).json({ 'message': 'Book deleted successfully'});
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}