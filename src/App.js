import React, { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
const useSemiPersistentState =()=>{
  // initialTodoList will get the stored list from localStorage if list dose not exist then it will be initialized with empty array 
  
  const initialTodoList =  JSON.parse(localStorage.getItem('savedTodoList')) || []
  // State variable
  const [todoList, setTodoList] = useState(initialTodoList)
  // useEffect hook to store data in local storage 
  useEffect(() => { 
   localStorage.setItem('savedTodoList',JSON.stringify(todoList));
  },[todoList]);
  return [todoList,setTodoList];
}
function App() { 
  const[todoList,setTodoList]=useSemiPersistentState()
  const addTodo =(newTodo)=>{    
     setTodoList( (previousTodoList) => [...previousTodoList, newTodo])
  }
  const removeTodo=(id)=>setTodoList((currentList) =>currentList.filter((todo)=>todo.id !==id))
  return (
    <>
     <h1>Todo List</h1>
     <hr/>  
     <AddTodoForm onAddTodo={addTodo}/>   
     <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
  </>
  )  
}
export default App;
