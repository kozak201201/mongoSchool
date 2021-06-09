const objectId = require('mongodb').ObjectID;

const studentController = {
    getAllStudents: function(req, res) {
        const db = require('../app').db;
        db.collection('students').find({}).toArray()
        .then(students => res.send(students))
        .catch(err => res.status(404).send(err));
    },
    getStudent: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('students').findOne({_id: id})
        .then(student => student ? res.send(student) : res.sendStatus(404))
        .catch(err => res.status(404).send(err));
    },
    createStudent: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const {name, surname, age} = req.body;
        const db = require('../app').db;
        db.collection('students').insertOne({name, surname, age})
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    updateStudent: function(req, res) {
        if (isEmpty(req.body)) return res.sendStatus(400);

        const id = new objectId(req.params.id);
        const {name, surname, age} = req.body;
        const db = require('../app').db;
        db.collection('students').updateOne({_id: id}, { $set:{name, surname, age}})
        .then(result => {
            result.matchedCount ? res.sendStatus(200) : res.sendStatus(404);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
    },
    deleteStudent: function(req, res) {
        const id = new objectId(req.params.id);
        const db = require('../app').db;
        db.collection('students').deleteOne({_id: id})
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

module.exports = studentController;