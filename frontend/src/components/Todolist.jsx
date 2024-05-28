import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelUpdate, deleteTodo, getTodo, getTodoById, updateTodo, setTodoUpdate } from '../reducers/todolistReducer'

const Todolist = () => {
    const dispatch = useDispatch();
    const todolist = useSelector(state => state.todolist.todolist)
    const todolistUpdate = useSelector(state => state.todolist.todoUpdate)
    const [update, setUpdate] = useState('')

    useEffect(()=>{
      dispatch(getTodo())
    }, [])

    const handleUpdate = (todo_id) => {
      
      // sesuaikan dengan field model yang ada di django server
      const todo = {
        'todo': update
      }
      dispatch(updateTodo(todo_id, todo))
      dispatch(setTodoUpdate(null))
      setUpdate('');
    }

  return (
    <div>
        {todolistUpdate? 
          <div>
            <h2>Update Todo</h2>
            <input type="text" value={update} onChange={(e) => setUpdate(e.target.value)} placeholder={todolistUpdate.todo} />
            <button onClick={()=> handleUpdate(todolistUpdate.id)}>Ubah</button>
            <button onClick={()=> dispatch(cancelUpdate())}>Batal</button>
          </div>: ''
        }
        <h2>Todolist</h2>
        <ul>
            {todolist.map((todo) => (
                <li key={todo.id}>{todo.todo} | <button onClick={()=> dispatch(getTodoById(todo.id))}>Update</button> | <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button></li> 
            ))}
        </ul>
    </div>
  )
}

export default Todolist