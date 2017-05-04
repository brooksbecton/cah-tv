const bodyParser = require('body-parser')
const express = require('express');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const cards = require('./container');

router.get('/', (req, res) => {
    res.json(cards.getAll());
});

//Returns Ids for each deck received 
router.post('/decks/', (req, res) => {

    /**
     * Expects "decks" in body to be sent as array
     * e.g. - decks: ["Base", "CAHe1"]
     */
    const decks = JSON.parse(req.body.decks);
    res.json(cards.initCardIds(decks));
});

module.exports = router