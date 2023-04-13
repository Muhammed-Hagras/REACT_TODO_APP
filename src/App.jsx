import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  let [todos, setTodos] = useState([]);
  let [todosToShow, setTodosToShow] = useState("all");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo
        }
      })
    );
  };

  const removeAllCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.complete))
  }

  const  controlShowHandler = (s) => {

    setTodosToShow(s)
  }

    if(todosToShow === "active"){
      todos = todos.filter((todo) => !todo.complete)
    }
    if(todosToShow === "complete"){
      todos = todos.filter((todo) => todo.complete)
    }

  

  return (
    <div className="App">
      <h2>ToDo APP </h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} 
        handleDelete={handleDelete} 
        toggleComplete = {toggleComplete}
        />

      ))}
      <div className="control-show">
        <button className="btn-show" onClick={() => controlShowHandler("all")} >all</button>
        <button className="btn-show" onClick={() => controlShowHandler("active")} >active</button>
        <button className="btn-show" onClick={() => controlShowHandler("complete")} >complete</button>
      </div>
      <button className="btn-show" onClick={() =>removeAllCompletedTodos()}>Remove all completed todos</button>
    </div>
  );
}

export default App;
