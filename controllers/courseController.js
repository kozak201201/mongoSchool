const objectId = require('mongodb').ObjectID;

const courseController = {
    getAllCourses: function(req, res) {
        const db = require('../app').db;
        db.collection('courses').find({}).toArray()
        .then(courses => res.send(courses))
        .catch(err => res.status(404).send(err));
    },
    getCourse: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('courses').findOne({_id: id})
        .then(course => course ? res.send(course) : res.sendStatus(404))
        .catch(err => res.status(404).send(err));
    },
    createCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const name = req.body.name;
        const db = require('../app').db;
        db.collection('courses').insertOne({name})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    updateCourse: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const id = new objectId(req.params.id);
        const name = req.body.name;
        const db = require('../app').db;
        db.collection('courses').updateOne({_id: id}, { $set:{name: name}})
        .then(result => {
            result.matchedCount ? res.sendStatus(200) : res.sendStatus(404);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    deleteCourse: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('courses').deleteOne({_id: id})
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

module.exports = courseController;