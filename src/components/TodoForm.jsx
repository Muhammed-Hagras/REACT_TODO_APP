import React, { useState } from 'react'
import shortid from 'shortid'

export default function TodoForm({addTodo}) {
    const [todoText, setTodoText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            todoText: todoText,
            id: shortid.generate(),
            complete: false
        })
        setTodoText("")
    }
    // console.log(todoText)
  return (
    <form onSubmit={handleSubmit}>
        <input type='text'  placeholder='' value={todoText}
         onChange={(e)=> setTodoText( e.target.value)}/>
        <button className='btn ' type='submit'>ADD TODO</button>
    </form>
  )
}
