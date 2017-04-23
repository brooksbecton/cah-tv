const table = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TABLE':
            return state.concat({ "id": action.id });
        default:
            return state;

    }
}

export default table;