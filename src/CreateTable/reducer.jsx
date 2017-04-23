const table = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TABLE':
            return state.concat([]);
        default:
            return state;

    }
}

export default table;