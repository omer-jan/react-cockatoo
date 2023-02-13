import React, { useState } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() { 

  const [todoList, setTodoList] = useState([]);

  let addTodo =(newTodo)=>{ 
    setTodoList([...todoList,newTodo])    
  }
  
  return (
    <>
     <h1>Todo List</h1>
     <hr/>  
     <AddTodoForm onAddTodo={addTodo}/>     
     <TodoList todoList={todoList} />
  </>
  )  
}
export default App;
