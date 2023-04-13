import React from 'react'

export default function Todo({todo ,handleDelete}) {
  return (
    <div className='my-todo'>
      <div className='todo'>
        {todo.todoText}
      </div>
      <button className='del-btn' onClick={() =>handleDelete(todo.id)}>x</button>
    </div>
  )
}
