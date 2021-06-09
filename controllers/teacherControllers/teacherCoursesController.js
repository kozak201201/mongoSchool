const objectId = require('mongodb').ObjectID;

const teacherCoursesController = {
    getAllTeachersCourses: function(req, res) {
        const teacherId = new objectId(req.teacherId);
        const db = require('../../app').db;
        db.collection('teachersCourses').find({teacherId: teacherId}).toArray()
        .then(teachersCourses => res.send(teachersCourses))
        .catch(err => res.status(404).send(err));
    },
    getTeacherCourse: function(req, res) {
        const courseId = new objectId(req.params.courseId);
        const db = require('../../app').db;
        db.collection('teachersCourses').findOne({_id: courseId})
        .then(teacherCourse => teacherCourse ? res.send(teacherCourse) : res.sendStatus(404))
        .catch(err => res.status(404).send(err));
    },
    createTeacherCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);
        const teacherId = new objectId(req.teacherId);
        const courseId = new objectId(req.body.courseId);
        const db = require('../../app').db;
        db.collection('teachersCourses').insertOne({teacherId: teacherId, _id: courseId})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(409).send(err);
        });
    },
    updateTeacherCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const id = new objectId(req.params.courseId);
        const courseId = new objectId(req.body.courseId);
        const db = require('../../app').db;
        db.collection('teachersCourses').updateOne({_id: id}, { $set:{_id: courseId}})
        .then(result => {
            result.modifiedCount ? res.sendStatus(200) : res.sendStatus(404);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    deleteTeacherCourse: function(req, res) {
        const id = new objectId(req.params.courseId);
        const db = require('../../app').db;
        db.collection('teachersCourses').deleteOne({_id: id})
        .then(result => {
            console.log(result);
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

module.exports = teacherCoursesController;