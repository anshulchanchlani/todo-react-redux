import { combineReducers } from 'redux';
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, FETCH_TASK ,WRITE_TASK} from '../constants/index';


const taskReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TASK:

            state = state.concat(action.payload)
            break;


        case TOGGLE_TASK:
            let initialArrayForToggle = state

            state = initialArrayForToggle.map((task) => {
                if (task.id === action.payload) {
                    task.completed = !task.completed
                }
                return task;
            })

            break;

        case DELETE_TASK:
            let initialArrayForDeletion = state;

            state = arrayRemove(initialArrayForDeletion, action.payload)


            break;

        case FETCH_TASK:
            if(action.payload && action.payload.data && action.payload.data.tasks)
            {state= action.payload.data.tasks}else{
                state=[]
            }

            break;
        
        case WRITE_TASK:
            return state;
            break;
        default: return state;
    }
    return state;
}

const reducers = combineReducers({
    tasks: taskReducer,
})
export default reducers;

function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele.id != value;
    });
}