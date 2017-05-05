var hri = require('human-readable-ids').hri;
var firebase = require('./../firebase');

const cards = require('./../cards/container');


function _generateId() {
    return hri.random();
}

module.exports = {
    createNewTable: function (id = _generateId(), decks) {
        const deck = cards.initCardIds(decks);
        return firebase.database().ref('tables/' + id).set({
            active: false,
            deck: deck,
        });
    },
    deleteTables: function () {
        return firebase.database().ref('tables/').remove();
    },
    deleteTable: function (id) {
        return firebase.database().ref('tables/' + id).remove();
    },
    getTable: function (id) {
        return firebase.database().ref('tables/' + id).once('value');
    },
    getTables: function () {
        return firebase.database().ref('tables/').once('value');
    }
}

