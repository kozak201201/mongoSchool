const express = require('express');
const studentCoursesRouter = express.Router();
const studentCoursesController = require('../../controllers/studentControllers/studentCoursesController');

studentCoursesRouter.get('/', studentCoursesController.getAllStudentCourses);

studentCoursesRouter.post('/', studentCoursesController.joinToCourse);

module.exports = studentCoursesRouter;