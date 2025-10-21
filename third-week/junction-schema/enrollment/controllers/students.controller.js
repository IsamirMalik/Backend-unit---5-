// ...existing code...
const EnrollmentModel = require('../models/enrollment.model');
const StudentModel = require('../models/student.model');

const addStudent = async (req, res) => {
    try {
        let student = await StudentModel.create(req.body);
        res.status(200).json({ 'message': 'Student added successfully' , student });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

const deleteStudent = async (req,res) => {
    try {
        let student = await StudentModel.findById(req.params.id);
        if(!student) return res.status(404).json({ error: 'Student not found' });
        student.isActive = false;
        await student.save();
        res.status(200).json({ 'message': 'Student deleted successfully' , student });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const enrollments = await EnrollmentModel.find({ studentId: req.params.id, isActive: true }).populate('courseId');
        const courses = enrollments.map(e => e.courseId);
        res.status(200).json({ 'message': 'Courses fetched successfully' , courses });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

module.exports = { addStudent , deleteStudent , getCourses };