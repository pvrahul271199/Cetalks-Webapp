const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8000;


app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('./public/'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/events', (req, res) => {
    res.render("events")
})

app.get('/team', (req, res) => {
    res.render("team")
})

app.listen(port, (req, res) => {
    console.log(`Server Started at ${port}`)
})