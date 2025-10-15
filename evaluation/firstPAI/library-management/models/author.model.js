const mongoose = require('mongoose');
const connectDB = require('../configs/db');

const authorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        validate:({
            validator: (value) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(re)
            },
            message: "Please enter a valid email address"
        })
    },
    bio : {
        type: String,
    },
    books : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    createdAt : {
        type: Date,
        default: Date.now
    }
});



const AuthorModel = mongoose.model('Authors', authorSchema);


module.exports = { AuthorModel };
