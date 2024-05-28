import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { postTodo, getTodo } from '../reducers/todolistReducer';

const AddTodolist = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // sesuaikan dengan field model yang ada di django server
    const todo = {
        'todo': newTodo
    }

    dispatch(postTodo(todo))
    setNewTodo('');
  }
  return (
    <div>
        <h2>Add Todolist</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodolist