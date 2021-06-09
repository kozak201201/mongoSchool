const express = require('express');
const studentCoursesRouter = express.Router();
const studentCoursesController = require('../../controllers/studentControllers/studentCoursesController');

studentCoursesRouter.get('/', studentCoursesController.getAllStudentCourses);

module.exports = studentCoursesRouter;