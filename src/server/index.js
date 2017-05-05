var express = require('express');
var bodyParser = require('body-parser');

var tables = require('./tables/routes');
var cards = require('./cards/routes');

var app = express();

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api/cards', cards);
app.use('/api/tables', tables);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
