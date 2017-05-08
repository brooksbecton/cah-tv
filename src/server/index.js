const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const tables = require('./tables/routes');
const cards = require('./cards/routes');

const app = express();

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../../dist'));


const port = process.env.PORT || 8080;

app.use('/api/cards', cards);
app.use('/api/tables', tables);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist/', 'index.html'))
});

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
