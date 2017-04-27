var express = require('express');
var router = express.Router();

var table = require('./container');

router.get('/', function (req, res) {
    res.json(table.getTables());
});
router.get('', function (req, res) {
    res.json(table.getTables());
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('Table with id: ' + id);
    res.json(table.getTable(id));
});
router.post('', function (req, res) {
    console.log('creating table...')
    table.createNewTable();
    res.json({ message: 'POST TABLE SUCCESSFUL' });
});

module.exports = router
