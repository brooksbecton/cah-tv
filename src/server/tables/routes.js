var express = require('express');
var router = express.Router();

var table = require('./container');
var players = require('./players/routes');

router.get('/', (req, res) => {
    table.getTables()
        .then(function (data) {
            res.status(200).json(data.val());
        })
});

router.post('/', (req, res) => {
    const decks = JSON.parse(req.body.decks);
    table.createNewTable(undefined, decks)
        .then(() => {
            res.status(200).send('Success');
        })
});

router.get('/:tableId', (req, res) => {
    var tableId = req.params.tableId;
    table.getTable(tableId).then((data) => {
        if (data !== null) {
            res.status(200).json(data.val());
        } else {
            res.status(404).send('Table not found');
        }
    })
});

router.delete('/', (req, res) => {
    table.deleteTables().then(() => {
        res.status(200).send('Success');
    })
});

router.delete('/:tableId', (req, res) => {
    var tableId = req.params.tableId;
    table.deleteTable(tableId).then(() => {
        res.status(200).send('Success');
    })
});

router.use('/:tableId/players', players);


module.exports = router