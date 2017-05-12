const table = (state = [], action) => {

    const id = action.payload;
    const defaultTable = { "id": id };

    switch (action.type) {
        case 'ADD_TABLE':
            return state.concat(defaultTable);
        case 'DEL_TABLE':
            return state.filter(element => element.id !== id);
        default:
            return state;
    }
}

export default table;