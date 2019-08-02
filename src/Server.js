var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')
var path = require('path')

var app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParse.urlencoded({extended: true}))

var connection = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data'
});

app.post('/', (req, res)=>{
    var password = req.body.password;
    if(password){
        connection.query('SELECT * FROM customer WHERE password = ?', [password], (err, results, fields)=>{
            if(results.length > 0){
                res.json(results);
            }else{
                res.json(err);
            }
        });
    }
});
module.export = connection;