const express = require('express');
const teacherCoursesRouter = express.Router();
const teacherCoursesController = require('../../controllers/teacherControllers/teacherCoursesController');

teacherCoursesRouter.get('/:courseId', teacherCoursesController.getTeacherCourse);

teacherCoursesRouter.get('/', teacherCoursesController.getAllTeachersCourses);

teacherCoursesRouter.post('/', teacherCoursesController.createTeacherCourse);

teacherCoursesRouter.put('/:courseId', teacherCoursesController.updateTeacherCourse);

teacherCoursesRouter.delete('/:courseId', teacherCoursesController.deleteTeacherCourse);

module.exports = teacherCoursesRouter;