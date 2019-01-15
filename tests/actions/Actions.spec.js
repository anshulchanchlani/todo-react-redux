import * as selectActions from '../../src/actions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();
const item = {
    "id": 1,
    "name": "hi",
    "createdAt": 1547557062930,
    "completed": true,
    "lastModifiedAt": 1547557062930
}
describe('Test on Actions ',()=>{
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
      });
      test('ADD TASK dispatches the correct action and payload', () => {
        const expectedActions = [
          {
            'payload': item,
            'type': 'ADD_TASK',
          },
        ];
    
        store.dispatch(selectActions.addTask(item));
        expect(store.getActions()).toEqual(expectedActions);
      });

      test('DELETE TASK dispatches the correct action and payload', () => {
        const expectedActions = [
          {
            'payload': item.id,
            'type': 'DELETE_TASK',
          },
        ];
    
        store.dispatch(selectActions.deleteTask(item.id));
        expect(store.getActions()).toEqual(expectedActions);
      });
      
      test('Toggle TASK dispatches the correct action and payload', () => {
        const expectedActions = [
          {
            'payload': item.id,
            'type': 'TOGGLE_TASK',
          },
        ];
    
        store.dispatch(selectActions.toggleTask(item.id));
        expect(store.getActions()).toEqual(expectedActions);
      });
})