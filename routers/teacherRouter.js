const express = require('express');
const teacherRouter = express.Router();
const teacherController = require('../controllers/teacherController');

teacherRouter.get('/:id', teacherController.getTeacher);

teacherRouter.get('/', teacherController.getAllTeachers);

teacherRouter.post('/', teacherController.createTeacher);

teacherRouter.put('/:id', teacherController.updateTeacher);

module.exports = teacherRouter;