const express = require('express');
const teacherRouter = express.Router();
const teacherController = require('../controllers/teacherController');
const teacherCoursesRouter = require('../routers/teacherRouters/teacherCoursesRouter');

teacherRouter.use('/:teacherId/courses', function(req, res, next) {
    req.teacherId = req.params.teacherId;
    next();
}, teacherCoursesRouter)

teacherRouter.get('/:id', teacherController.getTeacher);

teacherRouter.get('/', teacherController.getAllTeachers);

teacherRouter.post('/', teacherController.createTeacher);

teacherRouter.put('/:id', teacherController.updateTeacher);

teacherRouter.delete('/:id', teacherController.deleteTeacher);

module.exports = teacherRouter;