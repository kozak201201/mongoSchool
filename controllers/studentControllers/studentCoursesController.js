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
    },
    joinToCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const studentId = req.studentId;
        const teacherCourseId = req.body.teacherCourseId;
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .insertOne({studentId: studentId, teacherCourseId: teacherCourseId})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
    }
}

function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}

module.exports = studentCoursesController;