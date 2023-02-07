import React from "react"; 
let AddTodoForm=(props)=>{
let handleAddTodo=(e)=>{
    e.preventDefault();
    let todoTitle=e.target.title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    e.target.title.value="";
}
 return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle" >Title</label>
        <input id="todoTitle" name="title" />
        <button type="submit">Add</button>
    </form>
 )
}
export default AddTodoForm