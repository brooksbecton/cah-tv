var express = require('express');
var router = express.Router();

var table = require('./container');

router.get('/', (req, res) => {
    table.getTables()
        .then(function(data) {
            res.status('200').json(data.val());
        })
});

router.post('/', (req, res) => {
    table.createNewTable()
        .then(() => {
            res.status('200').send('Success');
        })
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    table.getTable(id).then((data) => {
        if (data !== null) {
            res.status('200').json(data.val());
        } else {
            res.status('404').send('Table not found');
        }
    })
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    table.deleteTable(id).then(() => {
        if (data !== null) {
            res.status('200').send('success');
        } else {
            res.status('404').send('Table not found');
        }
    })
});

module.exports = router