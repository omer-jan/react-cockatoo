import React, { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
//require('dotenv').config({ path: '.env.local' });
function App() { 
    const API_KEY="keyekdSu5UIFCvRi7"
    const BASE_ID="appYHZzF0wZRM22FY"
    //const initialTodoList =  JSON.parse(localStorage.getItem('savedTodoList')) || []
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
 
      fetch(`https://api.airtable.com/v0/${BASE_ID}/Default`,{
        headers:{
          'Authorization': `Bearer ${API_KEY}`
        }
      })
      .then((response) => response.json())
      .then((dataFromAPI) => {
        const todos = dataFromAPI.records.map((todo) => { 
          const newTodo =  {
              id: todo.id,
              title: todo.fields.Title
          }
          return newTodo
    
      }); 
      setTodoList(todos);
      setIsLoading(false);
    })


    },[]) 
  useEffect(() => { 
    if(!isLoading)
    {
      
    }
    localStorage.setItem('savedTodoList',JSON.stringify(todoList));
        
  },[todoList]); 
  const addTodo =(newTodo)=>{    
     setTodoList( (previousTodoList) => [...previousTodoList, newTodo])
  }
  const removeTodo=(id)=>setTodoList((currentList) =>currentList.filter((todo)=>todo.id !==id))
  return (
    <>
     <h1>Todo List</h1>
     <hr/>  
     <AddTodoForm onAddTodo={addTodo}/>  
      { 
          isLoading ? 
          <p>Loading...</p>
          :  
          <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      }
  </>
  )  
}
export default App;
