import tasks from '../../src/reducers';
import {
    ADD_TASK, DELETE_TASK, TOGGLE_TASK // Only ones related to the reducer being tested
} from '../../src/constants';

const item = {
    "id": 1,
    "name": "hi",
    "createdAt": 1547557062930,
    "completed": true,
    "lastModifiedAt": 1547557062930
}
describe('Task Reducer', () => {

    test('INITIAL_STATE', () => {

        const action = { type: 'dummy_action' };
        const initialState = { tasks: [] };

        expect(tasks(undefined, action)).toEqual(initialState);

    });


    test('ADD Task returns the correct state', () => {
        const action = { type: ADD_TASK, payload: item };
        const expectedState = { tasks: [item] };

        expect(tasks(undefined, action)).toEqual(expectedState);
    });

    test('Toggle Task returns the correct state', () => {
        const action = { type: TOGGLE_TASK, payload: item.id };
        item.completed=!item.completed;
        const expectedState = { tasks: [item] };

        expect(tasks({tasks:[item]}, action)).toEqual(expectedState);
    });

    test('Delete Task returns the correct state', () => {
        const action = { type: DELETE_TASK, payload: item.id };
        const expectedState = { tasks: [] };

        expect(tasks({tasks:[item]}, action)).toEqual(expectedState);
    });

});
