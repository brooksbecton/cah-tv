export function ADD_TABLE(id) {
    if (id !== undefined) {
        return { type: 'ADD_TABLE', id: id }
    }
};

