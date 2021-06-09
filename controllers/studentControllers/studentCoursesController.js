const objectId = require('mongodb').ObjectID;

const studentCoursesController = {
    getAllStudentCourses: function(req, res) {
        const studentId = new objectId(req.studentId);
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .find({studentId: studentId}).toArray()
        .then(studentTeachersCourses => res.send(studentTeachersCourses))
        .catch(err => {
            console.log(err);
            res.status(404).send(errGET);
        });
    },
    getStudentCourse: function(req, res) {
        const studentId = new objectId(req.studentId);
        const teacherCourseId = new objectId(req.params.teacherCourseId);
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .findOne({studentId: studentId, teacherCourseId: teacherCourseId})
        .then(studentTeachersCourse => {
            studentTeachersCourse ? 
            res.send(studentTeachersCourse) : 
            res.sendStatus(404);
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    joinToCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const studentId = new objectId(req.studentId);
        const teacherCourseId = new objectId(req.body.teacherCourseId);
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .insertOne({studentId: studentId, teacherCourseId: teacherCourseId})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
    },
    leaveFromCourse: function(req, res) {
        const studentId = new objectId(req.studentId);
        const teacherCourseId = new objectId(req.body.teacherCourseId);
        const db = require('../../app').db;
        db.collection('studentsTeachersCourses')
        .deleteOne({teacherCourseId: teacherCourseId, studentId: studentId})
        .then(result => {
            result.deletedCount ? res.sendStatus(200) : res.sendStatus(404);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    }
}

function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}

module.exports = studentCoursesController;