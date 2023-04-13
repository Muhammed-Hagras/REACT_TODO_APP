import React from "react";

export default function Todo({ todo, handleDelete, toggleComplete }) {
  return (
    <div className="my-todo">
      <div
        className="todo"
        onClick={() => toggleComplete(todo.id)}
        style={{ textDecoration: todo.complete ? "line-through" : "" }}
      >
        {todo.todoText}
      </div>
      <button className="del-btn" onClick={() => handleDelete(todo.id)}>
        X
      </button>
    </div>
  );
}
