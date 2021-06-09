const express = require('express');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController');
const studentCoursesRouter = require('../routers/studentRoutes/studentCoursesRouter');

studentRouter.use('/:studentId/courses', (req, res, next) => {
    req.studentId = req.params.studentId;
    next();
}, studentCoursesRouter);

studentRouter.get('/:id', studentController.getStudent);

studentRouter.get('/', studentController.getAllStudents);

studentRouter.post('/', studentController.createStudent);

studentRouter.put('/:id', studentController.updateStudent);

studentRouter.delete('/:id', studentController.deleteStudent);

module.exports = studentRouter;