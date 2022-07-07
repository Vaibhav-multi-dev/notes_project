const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
    res.render("mypage");
})

app.get('/secPage', (req, res) => {
    res.render('secTrial');
})

app.get("/billi", (req, res) => {
    res.send("Meowww");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})