var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dev_test'
})

connection.connect()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/test',function(req,res) {
	res.send('Working');
});

app.get('/api/notes', function(req,res) {
	connection.query('SELECT * from dvds ORDER BY dv_id DESC', function (err, results) {
	  if (err) throw err
	  	// res.send('Working');
	  res.send(results)
	})
});

app.delete('/api/notes/:id', function(req,res) {
	var id = req.params.id;
	connection.query('DELETE FROM dvds WHERE dv_id = '+id, function (err, results) {
	  if (err) throw err
	  	// res.send('Working');
	  res.send(results)
	})
});

app.post('/api/notes', function(req,res) {
	var postedData = req.body;
	connection.query('INSERT INTO dvds SET ?', postedData, function (err, results) {
	// console.log(req.body);
	  if (err) throw err
	  	// res.send('Working');
	  res.send(results)
	})
});

app.listen('4500');

// connection.end()