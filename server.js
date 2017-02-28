var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

mongoose.connect('mongodb://localhost/emberData');

var noteSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
},{versionKey: false});

var NoteModel = mongoose.model('notes',noteSchema);

app.get('/test',function(req,res) {
	res.send('Working');
});

app.get('/api/notes', function(req,res) {
	NoteModel.find({},function(err,docs) {
		if(err) {
			res.send({error:err});
		}
		else {
			res.send({notes:docs});
		}
	});
});

app.post('/api/notes',  function (req, res) {
	req.addListener('data', function(message){
		var command = JSON.parse(message);
	    var post = new NoteModel({
		  	_id: mongoose.Types.ObjectId(),
		    title: command.note.title,
		    content: command.note.content,
		    author: command.note.author
		})
		post.save(function (err, post) {
			if (err) { return next(err) }
			// res.send('Saved');
		})
	})
})

app.delete('/api/notes', function (req, res) {
  res.send('DELETE request to homepage');
});

// app.listen(port,function(){
//     console.log('your server is running');
// });

app.listen('4500');