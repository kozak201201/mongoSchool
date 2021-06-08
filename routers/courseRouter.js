const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courseController');

courseRouter.get('/:id', courseController.getStudent);

courseRouter.get('/', courseController.getAllStudents);

courseRouter.post('/', courseController.createStudent);

courseRouter.put('/:id', courseController.updateStudent);

courseRouter.delete('/:id', courseController.deleteStudent);

module.exports = courseRouter;