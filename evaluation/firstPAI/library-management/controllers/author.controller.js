const express = require('express');
const AuthorModel = require('../models/author.model.js');
const BookModel = require('../models/book.model.js');  


const getAllAuthors = async (req, res) => {
    try {
        let authors = await AuthorModel.find({});
        res.status(200).json(authors);
    } catch (err) {

        res.status(500).json({ 'error': 'Internal server error' , "error":err.message});
    }
}

const getAuthorById = async (req, res) => {
    try {
        let id = req.params.id
        const author = await AuthorModel.findById(id);
        res.status(200).json({'author': author});
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' , "error" : err.message });
    }
}

const createAuthor = async (req, res) => {
    try {
        let authorInfo = req.body;
        const author = await AuthorModel.create(authorInfo);       

        res.status(201).json({ 'message': 'Author created successfully' , author });
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' , "error" : err.message  });
    }
}

const updateAuthor = async (req, res) => {
    try {
        let id = req.params.id;
        let newInfo = req.body
        const author = await AuthorModel.findByIdAndUpdate(id, newInfo, { new: true });
        res.status(200).json(author);
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await AuthorModel.findByIdAndDelete(authorId);
        res.status(200).json({ 'message': 'Author deleted successfully'});
    } catch (err) {
        res.status(500).json({ 'error': 'Internal server error' });
    }
}

module.exports = { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
