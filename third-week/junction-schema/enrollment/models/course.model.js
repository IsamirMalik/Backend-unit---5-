const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const CourseModel = mongoose.model('CourseModel', courseSchema);
module.exports = CourseModel;