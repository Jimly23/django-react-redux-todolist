import React, { useState, useEffect } from 'react'
import Todolist from './components/Todolist'
import AddTodolist from './components/AddTodolist'

function App() {
  return (
    <div>
      <AddTodolist />
      <Todolist />
    </div>
  )
}

export default App
