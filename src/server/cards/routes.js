const express = require('express');
const router = express.Router();

const cards = require('./container');

router.get('/', (req, res) => {
    res.json(cards.getAll());
});

module.exports = router