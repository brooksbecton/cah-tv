import table from './table'
import { ADD_TABLE, DEL_TABLE } from './../actions/table'
describe('tables reducer', () => {
    it('should return initial state', () => {
        const expectedValue = [];
        expect(table(undefined, {})).toEqual(expectedValue)
    })
    it('should add table', () => {
        const id = "uid";
        const action = ADD_TABLE(id);
        const expectedValue = [{ 'id': id }];
        expect(table([], action)).toEqual(expectedValue)
    })
    it('should delete table', () => {
        const id = "uid";
        const action = DEL_TABLE(id);
        const expectedValue = [];
        expect(table([{ 'id': id }], action)).toEqual(expectedValue)
    })
});