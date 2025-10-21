const EnrollmentModel = require("../models/enrollment.model");
const CourseModel = require('../models/course.model');

const addCourse = async (req, res) => {
    try {
        let course = await CourseModel.create(req.body);
        res.status(200).json({ 'message': 'Course added successfully' , course });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

const deleteCourse = async (req,res) => {
    try {
        let course = await CourseModel.findById(req.params.id);
        if(!course) return res.status(404).json({ error: 'Course not found' });
        course.isActive = false;
        await course.save();
        res.status(200).json({ 'message': 'Course deleted successfully' , course });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const enrollments = await EnrollmentModel.find({ courseId: req.params.id, isActive: true }).populate('studentId');
        const students = enrollments.map(e => e.studentId);
        res.status(200).json({ 'message': 'Students fetched successfully' , students });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

module.exports = { addCourse , deleteCourse , getStudents };