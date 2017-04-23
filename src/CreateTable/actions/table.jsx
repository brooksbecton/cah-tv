export function ADD_TABLE(id) {
    if (id !== undefined) {
        return { type: 'ADD_TABLE', payload: id }
    }
};
export function DEL_TABLE(id) {
    if (id !== undefined) {
        return { type: 'DEL_TABLE', payload: id }
    }
};

