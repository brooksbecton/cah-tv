var hri = require('human-readable-ids').hri;
var firebase = require('./../../firebase');


function _generateId() {
    return hri.random();
}

module.exports = {
    createNewPlayer: (tableId, playerId) => {
        const baseUrl = 'tables/' + tableId + '/players/';
        return firebase.database().ref(baseUrl + playerId).set({
            name: "Brooks"
        });
    },
    deletePlayers: (tableId) => {
        const baseUrl = 'tables/' + tableId + '/players/';
        console.log(baseUrl);
        return firebase.database().ref(baseUrl).remove();
    },
    deletePlayer: function (tableId, playerId) {
        const baseUrl = 'tables/' + tableId + '/players/';
        return firebase.database().ref(baseUrl + playerId).remove();
    },
    getPlayers: (tableId) => {
        const baseUrl = 'tables/' + tableId + '/players/';
        return firebase.database().ref(baseUrl).once('value');
    },
    getPlayer: (tableId, playerId) => {
        const baseUrl = 'tables/' + tableId + '/players/';
        return firebase.database().ref(baseUrl + playerId).once('value');
    },

}

