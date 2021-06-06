const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const PORT = process.env.PORT || 3000;
const db;

const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

mongoClient.connect().then(client => {
    db = client.db('School');
    app.listen(3000, console.log(`Server start on ${PORT}`));
}).catch(err => {
    console.log(err);
});