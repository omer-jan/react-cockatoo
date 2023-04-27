import React, { useState, useEffect } from 'react'; 
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import styles from './components/TodoList.module.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {  
    const API_KEY=process.env.REACT_APP_API_KEY;
    const BASE_ID=process.env.REACT_APP_BASE_ID;  
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
    <BrowserRouter>
  <Routes>
      <Route path="/" element={
        <div className={styles.wrapper}>       
          <div className={styles.container}>
          <Header/> 
          <AddTodoForm onAddTodo={addTodo}/>  
          { 
              isLoading ? 
              <p className={styles.title}>Loading...</p>
              : 
              <div className={styles.todoItemContainer}>                          
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
              </div>
          }
        </div>
        </div>
      }/>
      <Route path="/new" element={ <h1>New Todo List</h1>}></Route>
  </Routes>

</BrowserRouter>
  )  
}
export default App;
