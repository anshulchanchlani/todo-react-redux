import { ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../constants'

export const addTask = (item) => {
    return {
        type: ADD_TASK,
        payload: item
    }
}

export const toggleTask = (itemId) => {
    return {
        type: TOGGLE_TASK,
        payload: itemId
    }
}


export const deleteTask = (itemId) => {
    return {
        type: DELETE_TASK,
        payload: itemId
    }
}


