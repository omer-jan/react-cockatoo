import React from 'react'
// Import the CSS module
import style from './cssModule/TodoList.module.css'; 
import buttonStyle from './cssModule/button.module.css'; 
const TodoListItem=({toDo,onRemoveTodo })=>{  
    return(
    <div className={style.todoItemBox} key={toDo.id}> 
        <span className={style.title} >{toDo.title}</span>  
        <button className={buttonStyle.button} type="button" onClick={()=>onRemoveTodo(toDo.id)}><i className="material-icons">delete</i></button> 
    </div>
    )
}
export default TodoListItem;
