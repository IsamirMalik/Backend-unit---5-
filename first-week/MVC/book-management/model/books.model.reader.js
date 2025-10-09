const fs = require('node:fs');

const getData = () => {
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    let books = data.books;
    return { books, data };
};

const addOrUpdateBooks = (data) => {
    fs.writeFileSync('./db.json', JSON.stringify(data));
};

module.exports = { getData , addOrUpdateBooks};