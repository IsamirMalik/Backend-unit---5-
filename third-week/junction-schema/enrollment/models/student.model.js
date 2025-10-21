const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

const CouserModel = mongoose.model('Course', courseSchema);;

module.exports = CouserModel;