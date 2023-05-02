
import TodoList from "./TodoList";
import Header from "./Header";
import styles from './TodoList.module.css';
import React, { useState, useEffect } from 'react'; 
import AddTodoForm from "./AddTodoForm";
const TodoContainer = () => {
    const API_KEY=process.env.REACT_APP_API_KEY;
    const BASE_ID=process.env.REACT_APP_BASE_ID;  
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
 
      fetch(`https://api.airtable.com/v0/${BASE_ID}/Default?view=toDoTbl&sort[0][field]=Title&sort[0][direction]=asc`,{
        headers:{
          'Authorization': `Bearer ${API_KEY}`
        }
      })
      .then((response) => response.json())
      .then((dataFromAPI) => {
        const todos = dataFromAPI.records.sort((objectA,objectB)=>{
            console.log(objectA);
            const titleA = objectA.fields.Title.toLowerCase();
            const titleB = objectB.fields.Title.toLowerCase(); 
            if(titleA<titleB)
                return 1;
            if(titleA==titleB)
                return 0;
            return -1;

        }).map((todo) => { 
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
  const sortTodoList = (sortType) => {
    const sortedList = [...todoList].sort((a, b) => {
      if(sortType)
      {
        // Sort by ascending order
        return a.title.localeCompare(b.title);
      }
      else 
      {
        // Sort by descending order
       return b.title.localeCompare(a.title);
      } 
    });
    setTodoList(sortedList);
  };
  const removeTodo=(id)=>setTodoList((currentList) =>currentList.filter((todo)=>todo.id !==id))
    return (
    <div className={styles.wrapper}>       
        <div className={styles.container}>
        <Header/> 
        <AddTodoForm onAddTodo={addTodo}/>  
        { 
            isLoading ? 
            <p className={styles.title}>Loading...</p>
            : 
            <div className={styles.todoItemContainer}>                          
            <TodoList onRemoveTodo={removeTodo} onSortTodoList={sortTodoList} todoList={todoList} />
            </div>
        }
        </div>
    </div>
    )
}
export default TodoContainer;