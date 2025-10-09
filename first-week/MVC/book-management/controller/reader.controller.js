const { getData , addOrUpdateBooks } = require('../model/books.model.reader.js');

const getAllBooks = (req , res) => {
    const {data , books} = getData();

    let bookList = books.filter(book => book.status == "available")
    res.status(200).json({books : bookList});
    
};

const borrowBook = (req , res) => {
    const id = req.params.id;
    const readerName = req.body;

    const {data , books} = getData();
    const index = books.findIndex(book => book.id == id);

    if (index == -1) {
        res.status(404).json({ "message": "Book not found" });
    } else {
        let updatedBooks = books.map((book , i) => {
            if (book.id == id) {
                return { ...book , status: "borrowed" , readerName: readerName , borrowedDate : Date.now() };
            } else {
                return book;
            }
        });
        data.books = updatedBooks;
    }
    addOrUpdateBooks(data);
    res.status(200).json({message : "Book borrowed successfully"});
};

const returnBook = (req , res) => {
  const id = req.params.id;

  const {data , books} = getData();
  const index = books.findIndex(book => book.id == id);

  if (index == -1) {
      res.status(404).json({ "message": "Book not found" });
  } else {
      let updatedBooks = books.map((book , i) => {
          if (book.id == id) {
            let days = Math.floor((Date.now() - book.borrowedDate) / (1000 * 60 * 60 * 24));
            if(days < 3){
                res.status(200).json({message : "Can't reutrn before 3 days"});
                return book;
            }else{
              return { ...book , status: "available" , readerName: null , borrowedDate : null  };
            }
          } else {
              return book;
          }
      });
      data.books = updatedBooks;
  }
  addOrUpdateBooks(data);
  res.status(200).json({message : "Book returned successfully"});
   
};

module.exports = { getAllBooks , borrowBook , returnBook};