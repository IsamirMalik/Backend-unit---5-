const express = require('express');

const  { addStudent , getCourses , deleteStudent } = require('../controllers/students.controller');

const { addCourse  , getStudents , deleteCourse } = require('../controllers/course.controller');

const { addEnrollment } = require('../controllers/enrollment.controller');

const LMSRouter = express.Router();

LMSRouter.post('/add-student' , addStudent);

LMSRouter.post('/add-course' , addCourse);

LMSRouter.post('/add-enrollment' , addEnrollment);

LMSRouter.patch('/delete-student/:id' , deleteStudent);

LMSRouter.patch('/delete-course/:id' , deleteCourse);

LMSRouter.get('/students/:id/courses' , getCourses);

LMSRouter.get('/courses/:id/students' , getStudents);


module.exports = LMSRouter;