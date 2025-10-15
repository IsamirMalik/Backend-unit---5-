const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        unique: true
    },
    email: {
        type: String,
        // required: true,
        unique: true,
    },
    bio: {
        type: String,
    },
    books : [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Book'
    //     }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});



const AuthorModel = mongoose.model('Authors', authorSchema);


module.exports = AuthorModel;
