const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/notesTest')
//     .then(() => console.log("Database connected"))
//     .catch(error => handleError(error));

// mongoose.connection.on('error', err => {
//     logError(err);
// });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //making views accessible from anywhere
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //Used to parse form data

app.get('/home', (req, res) => {
    res.render('allnotes/index');
})

app.get('/codingExercises', (req, res) => {
    res.render('allnotes/codingExer');
})

app.get('/tips', (req, res) => {
    res.render('allnotes/tips.ejs');
})

app.get('/resources', (req, res) => {
    res.render('allnotes/resources')
})

app.get('/aboutme', (req, res) => {
    res.render('extras/aboutme')
})

app.get('/section/jump', (req, res) => {
    const { secId: id } = (req.query);
    res.redirect(`/section/${id}`);
})

app.get('/section/:id', (req, res) => {
    const { id } = req.params;
    res.render(`allnotes/sections/sec${id}`, { id });
})

app.use((err, req, res, next) => {
    res.status(400);
    res.send("Unavailable");
})

app.listen(8080, () => {
    console.log("Listening on 8080");
})