import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import buttonStyle from './button.module.css';  
import PropTypes from 'prop-types';

const AddTodoForm=({onAddTodo})=>{

// State
const [todoTitle, setTodoTitle] = useState("");

const handleTitleChange=(e)=>{
    const newTodoTitle=e.target.value; 
    setTodoTitle(newTodoTitle); 
}

const handleAddTodo=(e)=>{
    e.preventDefault();
    if(todoTitle=="")
    {
        alert("Please enter a todo task");
    }
    else 
    {
        const todoObj={
            id:Date.now(),
            title:todoTitle
        };
        onAddTodo(todoObj);
        setTodoTitle("");
    }
 
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
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func // Define the prop type for onAddTodo
  };
export default AddTodoForm
