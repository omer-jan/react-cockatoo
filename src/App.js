import React, { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
function App() { 
    const initialTodoList =  JSON.parse(localStorage.getItem('savedTodoList')) || []
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      new Promise((resolve,reject)=>
                    {
                        setTimeout(() =>
                        {
                            resolve({ data: { todoList: initialTodoList } });
                        }, 2000)
                    }
                  ).then((result)=>{
                    setTodoList(result.data.todoList);
                    setIsLoading(false);

                  });
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
