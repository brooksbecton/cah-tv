var hri = require('human-readable-ids').hri;
var firebase = require('./../firebase');

function _generateId() {
    return hri.random();
}

module.exports = {
    createNewTable: function () {
        var id = _generateId();
        firebase.database().ref('tables/' + id).set({
            active: false
        });
        console.log('table made!');
    },

    getTable: function (id) {
        console.log('tables/' + id);
        firebase.database().ref('tables/' + id).once('value').then(function (snapshot) {
            console.log(snapshot.val());
            return snapshot.val();
        });
    },
    getTables: function () {
        firebase.database().ref('tables/').once('value').then(function (snapshot) {
            console.log(snapshot.val());
            return snapshot.val();
        });
    }
}

