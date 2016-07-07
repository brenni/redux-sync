var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname ));

app.get('/', function (req, res) {
	res.send(index.html);
});
app.post('/state', function (req, res) {
	console.log(req.body);
	res.send('POST request to state endpoint');
});

app.listen(5000);
console.log('App listening on port: 5000');


