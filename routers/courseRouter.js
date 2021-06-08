const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courseController');

courseRouter.get('/:id', courseController.getCourse);

courseRouter.get('/', courseController.getAllCourses);

courseRouter.post('/', courseController.createCourse);

courseRouter.put('/:id', courseController.updateCourse);

courseRouter.delete('/:id', courseController.deleteCourse);

module.exports = courseRouter;