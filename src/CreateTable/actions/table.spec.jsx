import { ADD_TABLE } from './table'

describe('actions', () => {
    it('should create basic table with id', () => {
        const id = 'uid'
        const expectedAction = {
            type: 'ADD_TABLE',
            id: id
        }
        expect(ADD_TABLE(id)).toEqual(expectedAction)
    })
})