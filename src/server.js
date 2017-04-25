// server.js

var express = require('express');
var firebase = require('firebase');
var bodyParser = require('body-parser');
var hri = require('human-readable-ids').hri;
require('dotenv').config()

var app = express();
console.log(process.env.FIREBASE_API_KEY);
// Initialize Firebase
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'Success' });
});
router.get('/tables', function (req, res) {
    var table = getTables();
    res.json(table);
});
router.get('/tables/:id', function (req, res) {
    var id = req.params.id;
    console.log('Table with id: ' + id);
    var table = getTable(id);
    res.json(table);
});
router.post('/tables', function (req, res) {
    console.log('creating table...')
    createNewTable();
    res.json({ message: 'POST TABLE SUCCESSFUL' });
});

app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);

function generateId() {
    return hri.random();
}

function createNewTable() {
    var id = generateId();
    firebase.database().ref('tables/' + id).set({
        active: false
    });
    console.log('table made!');
}

function getTable(id) {
    console.log('tables/' + id);
    firebase.database().ref('tables/' + id).once('value').then(function (snapshot) {
        console.log(snapshot.val());
        return snapshot.val();
    });
}
function getTables() {
    firebase.database().ref('tables/').once('value').then(function (snapshot) {
        console.log(snapshot.val());
        return snapshot.val();
    });
}