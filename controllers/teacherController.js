const objectId = require('mongodb').ObjectID;

const teacherController = {
    getAllTeachers: function(req, res) {
        const db = require('../app').db;
        db.collection('teachers').find({}).toArray()
        .then(teachers => res.send(teachers))
        .catch(err => res.status(404).send(err));
    },
    getTeacher: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('teachers').findOne({_id: id})
        .then(teacher => teacher ? res.send(teacher) : res.sendStatus(404))
        .catch(err => res.status(404).send(err));
    },
    createTeacher: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const {name, surname, age} = req.body;
        const db = require('../app').db;
        db.collection('teachers').insertOne({name, surname, age})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    updateTeacher: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const id = new objectId(req.params.id);
        const {name, surname, age} = req.body;
        const db = require('../app').db;
        db.collection('teachers').updateOne({_id: id}, { $set:{name, surname, age}})
        .then(result => {
            result.modifiedCount ? res.sendStatus(200) : res.sendStatus(404);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    deleteTeacher: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('teachers').deleteOne({_id: id})
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

module.exports = teacherController;