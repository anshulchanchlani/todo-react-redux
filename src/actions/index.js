import { ADD_TASK, TOGGLE_TASK, DELETE_TASK,FETCH_TASK,WRITE_TASK} from '../constants'
import axios from 'axios'
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

export const fetchTasks= async(username,password)=>{
    const result = await axios.get('/getTasks',{params:{username:username,password:password}})
    console.log(result)
    return{
        type:FETCH_TASK,
        payload:result.data.tasks
    }
}

export const writeTasksToFile = async(username,password,tasks)=>{
    console.log('getting us,pa,ta as',username,password,tasks )
    const result = await axios.post('/writeTasks',{username:username,password:password,tasks:tasks})
    console.log(result)
    return{
        type:WRITE_TASK,
        payload:tasks
    }
}


