import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import buttonStyle from './cssModule/button.module.css'; 

const AddTodoForm=({onAddTodo})=>{

// State
const [todoTitle, setTodoTitle] = useState();

const handleTitleChange=(e)=>{

    const newTodoTitle=e.target.value;
     setTodoTitle(newTodoTitle);
     console.log(todoTitle);
}

const handleAddTodo=(e)=>{
    e.preventDefault();
    const todoObj={
        id:Date.now(),
        title:todoTitle
    };
    onAddTodo(todoObj);
    setTodoTitle("");
}

 return (
    <form onSubmit={handleAddTodo}>
        <InputWithLabel
            id="search"
            name="Search"            
            placeholder="Enter a new todo "
            inputValue={todoTitle}
            onInputChange={handleTitleChange}
        >Title</InputWithLabel> 
        <button className={buttonStyle.button} type="submit">Add</button>
    </form>
 )
}
export default AddTodoForm
