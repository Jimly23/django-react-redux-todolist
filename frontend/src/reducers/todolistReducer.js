import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    todolist: [],
    todoUpdate: null
}

const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setTodolist: (state, actions) => {
            state.todolist = actions.payload
        },
        setTodoUpdate: (state, actions) => {
            state.todoUpdate = actions.payload
        }
    }
})

export const {setTodolist, setTodoUpdate} = todolistSlice.actions;

export const getTodo = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:8000/api/todolist/')
            dispatch(setTodolist(response.data))
        }catch(err){
            console.error(err)
        }

    }
}

export const postTodo = (data) => {
    return async (dispatch, getState) => {
        try{
            const response = await axios.post('http://localhost:8000/api/todolist/', data)
            dispatch(getTodo())
        }catch(err){
            console.error(err)
        }
    }
}

export const getTodoById = (todo_id) => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:8000/api/todolist/${todo_id}`)
        dispatch(setTodoUpdate(response.data))
    }
}

export const updateTodo = (todo_id, changeTodo) => {
    return async (dispatch, getState) => {
        const response = await axios.put(`http://localhost:8000/api/todolist/${todo_id}/`, changeTodo)
        dispatch(getTodo())
    }
}

export const cancelUpdate = () => {
    return async (dispatch, getState) => {
        dispatch(setTodoUpdate(null))
    }
}

export const deleteTodo = (todo_id) => {
    return async (dispatch, getState) => {
        await axios.delete(`http://localhost:8000/api/todolist/${todo_id}`)
        dispatch(getTodo())
        console.log('Todo Berhasil Dihapus')
    }
}



export default todolistSlice.reducer;