import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import buttonStyle from './button.module.css'; 
import PropTypes from 'prop-types';

const AddTodoForm=({onAddTodo,isButtonClicked})=>{

// State
const [todoTitle, setTodoTitle] = useState("");

const handleTitleChange=(event)=>{
    const newTodoTitle=event.target.value; 
    setTodoTitle(newTodoTitle); 
}

const handleAddTodo=(event)=>{
    event.preventDefault();
    if(todoTitle==="")
    {
        alert("Please enter a todo task");
    }
    else 
    { 
        onAddTodo(todoTitle);
        setTodoTitle("");
    }
 
}

 return (
    <form onSubmit={handleAddTodo}>

        <InputWithLabel 
            name="addTodo"            
            placeholder="Enter a new todo "
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
        >Title</InputWithLabel> 
        <button className={buttonStyle.button} type="submit">{isButtonClicked ? 'Saving...' : 'Add'}</button>

 
    </form>
 )
} 
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func, // Define the prop type for onAddTodo
    isButtonClicked:PropTypes.bool 
  };
export default AddTodoForm
