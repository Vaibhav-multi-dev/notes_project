const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Section = require('./models/section');

mongoose.connect('mongodb://localhost:27017/notesTest')
    .then(() => console.log("Database connected"))
    .catch(error => handleError(error));

mongoose.connection.on('error', err => {
    logError(err);
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //making views accessible from anywhere
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //Used to parse form data

app.get('/home', async (req, res) => {
    //  First check if there is a logged in user or not
    // To check if there is user made sections or not
    // const userSection = await Section.find({ _id: "62c6bb343e6fcaacef7deff9" });
    const userSections = await Section.find({});
    if (userSections.length) {
        return res.render('allnotes/index', { userSections });
    }
    res.render('allnotes/index');
})

app.get('/codingEx', (req, res) => {
    res.render('allnotes/codingExer');
})

app.get('/section/trial', async (req, res) => {
    const newSection = new Section({ title: "Test section", num: 45, lectures: 6, sectype: 'html' });
    await newSection.save();
    res.send("Section made successfully");
})

// Link to test route -
// http://localhost:8080/section/view/62c6bb343e6fcaacef7deff9

app.get('/section/view/:id', async (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    const foundSection = await Section.findById(id);
    res.send(foundSection);
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

app.get('/section/new', (req, res) => {
    res.render('allnotes/newSection.ejs')
})

app.post('/section', async (req, res) => {
    const { title, num, lectures, sectype } = req.body.section;
    const mySection = new Section({ title, num, lectures, sectype });
    console.log(mySection);
    await mySection.save();
    res.send(mySection);
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