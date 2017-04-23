import { ADD_TABLE, DEL_TABLE } from './table'

describe('actions', () => {
    it('should return ADD_TABLE action with id', () => {
        const id = 'uid'
        const expectedAction = {
            type: 'ADD_TABLE',
            payload: id
        }
        expect(ADD_TABLE(id)).toEqual(expectedAction)
    })

    it('should return DEL_TABLE action with id', () => {
        const id = 'uid'
        const expectedAction = {
            type: 'DEL_TABLE',
            payload: id
        }
        expect(DEL_TABLE(id)).toEqual(expectedAction)
    })
})