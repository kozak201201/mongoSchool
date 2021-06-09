const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const jsonParser = express.json();
const teacherRouter = require('./routers/teacherRouter');
const studentRouter = require('./routers/studentRouter');
const courseRouter = require('./routers/courseRouter');
const url = 'mongodb://localhost:27017/';
const PORT = process.env.PORT || 3000;
let db;

const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

mongoClient.connect().then(client => {
    app.listen(3000, console.log(`Server start on ${PORT}`));
    db = client.db('School');
    db.collection('courses').createIndex({name: 1}, {unique: true});
    db.collection('teachersCourses').createIndex({courseId: 1, teacherId: 1}, {unique: true});
    module.exports.db = db;
}).catch(err => {
    console.log(err);
});

app.use(jsonParser);

app.use('/teachers', teacherRouter);

app.use('/students', studentRouter);

app.use('/courses', courseRouter);