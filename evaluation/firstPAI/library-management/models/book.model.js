
const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    summary : {
        type: String,
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    publishedDate : {
        type: Date
    },
    genre : [
        {
            type: String
        }
    ],
    copiesAvailable : {
        type: Number ,
        default: 1 ,
        min : 0
    }
});

const BookModel = mongoose.model('Books', bookSchema);

module.exports = mongoose.model('Books', bookSchema);