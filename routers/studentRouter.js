const express = require('express');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController');

studentRouter.get('/:id', studentController.getStudent);

studentRouter.get('/', studentController.getAllStudents);

studentRouter.post('/', studentController.createStudent);

studentRouter.put('/:id', studentController.updateStudent);

studentRouter.delete('/:id', studentController.deleteStudent);

module.exports = studentRouter;