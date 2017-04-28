var hri = require('human-readable-ids').hri;
var firebase = require('./../firebase');

function _generateId() {
    return hri.random();
}

module.exports = {
    createNewTable: function (id = _generateId()) {
        return firebase.database().ref('tables/' + id).set({
            active: false
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

