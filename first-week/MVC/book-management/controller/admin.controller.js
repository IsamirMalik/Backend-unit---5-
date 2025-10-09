const express = require('express');
const {getData , addOrUpdateBooks} = require('../model/books.model.admin');

const getAllBooks = (req , res) => {
    const {data , books} = getData();

    res.status(200).json({books});
};

const addBook = (req , res) => {

    const {data , books} = getData();
    const newBook = req.body;

    const lastBook = books[books.length - 1];
    const newId = lastBook ? lastBook.id + 1 : 1;
    newBook.id = newId;

    books.push(newBook);
    data.books = books;

    addOrUpdateBooks(data);
    res.status(201).json({message : "Book added successfully"});
};

// update staus
const updateBookDetails = (req , res) => {

    const id = req.params.id;
    const {data , books} = getData();
    const index = books.findIndex(book => book.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let updatedBooks = books.map((book , i) => {
            if (book.id == id) {
                return { ...book , ...req.body };
            } else {
                return book;
            }
        });
        data.books = updatedBooks;
    }
    addOrUpdateBooks(data);
    res.status(200).json({message : "Book updated successfully"});
};

// Remove A Book

const deleteBook = (req , res) => {
    const id = req.params.id;

    const {data , books} = getData();
    const index = books.findIndex(book => book.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let updatedBooks = books.filter(book => book.id != id);
        data.books = updatedBooks;
    }
    addOrUpdateBooks(data);
    res.status(200).json({message : "Book deleted successfully"});
};


module.exports = {getAllBooks , addBook , updateBookDetails , deleteBook};
