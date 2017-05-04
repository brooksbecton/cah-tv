const cards = require('./../assets/allCards.json');

module.exports = {

    //Returns all card data
    getAll: () => {
        return cards;
    },

    /**
     * Takes in an array of deck names 
     * Returns: obj with white and black card id's
     *         {'black': [1,2,3,...], 'white': [4,5,6,...]}
     */
    initCardIds: (deckNames) => {
        let totalCards = { 'black': [], 'white': [] }

        deckNames.map((name) => {
            let deck = cards[name];
            totalCards['black'] = totalCards['black'].concat(deck['black'])
            totalCards['white'] = totalCards['white'].concat(deck['white'])
        });
        return totalCards;
    }
}
