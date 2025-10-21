const EnrollmentModel = require("../models/enrollment.model");

const addEnrollment = async (req, res) => {
    try {
        let enrollment = await EnrollmentModel.create(req.body);
        res.status(200).json({ 'message': 'Enrollment added successfully' , enrollment });
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

module.exports = { addEnrollment };