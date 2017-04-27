var express = require('express');
var router = express.Router();

var table = require('./container');

router.get('/', (req, res) => {
    table.getTables()
        .then(function (data) {
            res.json(data.val());
        })

});
router.post('/', (req, res) => {
    table.createNewTable();
    res.send('Success');
});
router.get('/:id', (req, res) => {
    var id = req.params.id;
    table.getTable(id).then((data) => {
        res.json(data.val());
    })
});

module.exports = router
