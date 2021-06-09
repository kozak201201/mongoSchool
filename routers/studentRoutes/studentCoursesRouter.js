const express = require('express');
const studentCoursesRouter = express.Router();
const studentCoursesController = require('../../controllers/studentControllers/studentCoursesController');

studentCoursesRouter.get('/', studentCoursesController.getAllStudentCourses);

studentCoursesRouter.get('/:teacherCourseId', studentCoursesController.getStudentCourse);

studentCoursesRouter.post('/', studentCoursesController.joinToCourse);

studentCoursesRouter.delete('/:teacherCourseId', studentCoursesController.leaveFromCourse);

module.exports = studentCoursesRouter;