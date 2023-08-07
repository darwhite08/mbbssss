const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')
const validator =  require('email-validator');



const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('main');
});

app.get('/serbia', function(req, res) {
    res.render('countries/serbia/Serbia');
});
app.get('/serbia/UONFOM', function(req, res) {
    res.render('countries/serbia/colleges/uonfom');
});
app.all('*', (req, res) => {
    res.render('error');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))