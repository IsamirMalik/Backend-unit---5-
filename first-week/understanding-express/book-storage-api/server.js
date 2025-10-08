const express = require('express');
const fs = require('node:fs');


const PORT = 3000;
const app = express();

app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ "message": "Test route is working" })
});

// Search a book by author name
app.get('/books/search', (req, res) => {

    let author = req.query.author.toLocaleLowerCase();;
    let title = req.query.title.toLocaleLowerCase();

    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let books = data.books;

    console.log(author , books)

    let book = books.filter(book => book.author.toLocaleLowerCase().includes(author) );

    let titleBook = books.filter(book => book.title.toLocaleLowerCase().includes(title) );

    if (!book && !titleBook) {
        res.status(404).json({ "message": "Book not found" });
    } else if (titleBook) {
        res.status(200).json({ "Serach Result": titleBook });
    } else {
        res.status(200).json({ "Serach Result": book });
    }
});


// Getting all the books
app.get('/books', (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

    let books = data.books;
    res.json(books);

});


// Adding a new book    
app.post('/books', (req, res) => {
    let newBook = req.body;

    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let books = data.books;

    let id = books.length + 1;
    newBook.id = id;

    console.log(newBook);

    books.push(newBook);
    data.books = books;

    console.log(data.books)
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.json({ message: "Book added successfully" });

})

// Getting a book by id
app.get('/books/:id', (req, res) => {

    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let books = data.books;

    let index = books.findIndex(book => book.id == id);
    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let book = books[index];
        res.status(200).json({ "book": book });
    }
});

// Updating a book using id
app.put('/books/:id', (req, res) => {

    let id = req.params.id;
    let updatedBook = req.body;

    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let books = data.books;

    let index = books.findIndex(book => book.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let updatedBooks = books.map((book, i) => {
            if (book.id == id) {
                return { ...book, ...updatedBook };
            } else {
                return book;
            }
        });
        data.books = updatedBooks;
    }

    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ "message": "Book updated successfully" });
});

// Delete a book using id
app.delete('/books/:id', (req, res) => {

    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let books = data.books;

    let index = books.findIndex(book => book.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let updatedBooks = books.filter(book => book.id != id);
        data.books = updatedBooks;
    }

    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ "message": "Book deleted successfully" });
});


// handle undefined routes
app.use((req, res) => {
    res.status(404).json({ 'error': 'Route Not found' })
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})