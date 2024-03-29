const express = require("express") ;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
// const validator =  require('email-validator');
import {pg} from "pg";


const app = express()
const port = process.env.PORT || 3000;

const db = new pg.Client(
    {
        user: "postgres",
        host: "localhost",
        database: "medplasia",
        password: "medplasia",
        port: 5432,
    }
);
db.connect();

// middleware
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('main');
});

app.get('/contact-us', function(req, res) {
    res.render('contact-options/contact');
});

//get serbia 
// app.get('/serbia', function(req, res) {
//     res.render('countries/serbia/Serbia');
// });

app.get("/serbia", async (req, res) => {
    const result = await db.query("SELECT serbia_college FROM medplasia");
    let colleges = [];
    result.rows.forEach((college) => {
      colleges.push(college.serbia_college);
    });
    console.log(result.rows);
    res.render("countries/serbia/Serbia", { college_image:college_image, college_name: college_name, degree_name:degree_name,university_type:university_type,grade:grade,specialization: specialization,world_rank:world_rank,intake:intake,medium:medium, total:colleges.length});
    db.end();
  });

app.get('/admin', function(req, res) {
    res.render('admin-login');
});
app.get('/serbia/UONFOM', function(req, res) {
    res.render('countries/serbia/colleges/uonfom');
});
app.all('*', (req, res) => {
    res.render('');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))