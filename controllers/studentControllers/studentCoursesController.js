const objectId = require('mongodb').ObjectID;

const studentCoursesController = {
    getAllStudentCourses: function(req, res) {
        const studentId = req.studentId;
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .find({studentId: studentId}).toArray()
        .then(studentTeachersCourses => res.send(studentTeachersCourses))
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    }
}

module.exports = studentCoursesController;