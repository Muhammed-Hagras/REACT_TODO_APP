import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  let[todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(
      [todo,...todos]
    )
  }

  const handleDelete = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <div className="App">
     <h2>ToDo APP </h2>
     <TodoForm addTodo= {addTodo}/>
     {todos.map((todo) =>
      <Todo key={todo.id} todo={todo}  handleDelete={handleDelete}/>
     )}

    </div>
  )
}

export default App
