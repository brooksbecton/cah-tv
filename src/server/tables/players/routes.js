const express = require('express');
const router = express.Router({ mergeParams: true });

const player = require('./container');

router.get('/', (req, res) => {
    const tableId = req.params.tableId;
    player.getPlayers(tableId)
        .then(function (data) {
            res.status(200).json(data.val());
        })
});

router.get('/:playerId', (req, res) => {
    const tableId = req.params.tableId;
    const playerId = req.params.playerId;
    player.getPlayer(tableId, playerId).then((data) => {
        res.status(200).json(data.val());
    })
});

router.post('/:playerId?', (req, res) => {
    const tableId = req.params.tableId;
    const playerId = req.params.playerId;
    if (tableId && playerId) {
        player.createNewPlayer(tableId, playerId)
            .then(() => {
                res.status(200).send('Player Added');
            })
    }
    else {
        res.sendStatus(400);
    }
});

router.delete('/', (req, res) => {
    const tableId = req.params.tableId;
    player.deletePlayers(tableId).then(() => {
        res.status(200).send('Success');
    })
});

router.delete('/:playerId?', (req, res) => {
    const tableId = req.params.tableId;
    const playerId = req.params.playerId;
    if (tableId && playerId) {
        player.deletePlayer(tableId, playerId).then(() => {
            res.status(200).send('success');
        })
    }
    else {
        sendStatus(400)
    }
});

module.exports = router