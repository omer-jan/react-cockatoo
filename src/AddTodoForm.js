import React, { useState } from 'react';
let AddTodoForm=(props)=>{

// State
const [todoTitle, setTodoTitle] = useState();

// Destructing props
const{onAddTodo}=props;

let handleTitleChange=(e)=>{
     
     let newTodoTitle=e.target.value;  
     setTodoTitle(newTodoTitle);
     console.log(todoTitle);
}

let handleAddTodo=(e)=>{
    e.preventDefault();
    let todoObj={
        id:Date.now(),
        title:todoTitle
    };
    onAddTodo(todoObj);
    setTodoTitle("");
}

 return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle" >Title</label>
        <input value={todoTitle} onChange={handleTitleChange} id="todoTitle" name="title" />
        <button type="submit">Add</button>
    </form>
 )
}
export default AddTodoForm