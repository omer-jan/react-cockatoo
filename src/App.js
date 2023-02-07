import React, { useState } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
     <h1>Todo List</h1>
     <hr/>  
     <AddTodoForm onAddTodo={setNewTodo}/>  
     <p>{newTodo}</p>
     <TodoList />
  </>
  )  
}
export default App;
