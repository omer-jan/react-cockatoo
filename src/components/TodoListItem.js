import React from 'react'
// Import the CSS module
import style from './TodoList.module.css'; 
import buttonStyle from './button.module.css'; 
import PropTypes from 'prop-types';
const TodoListItem=({toDo,onRemoveTodo })=>{  
    return(
    <div className={style.todoItemBox} key={toDo.id}> 
        <span className={style.title} >{toDo.title}</span>  
        <button className={buttonStyle.button} type="button" onClick={()=>onRemoveTodo(toDo.id)}><i className="material-icons">delete</i></button> 
    </div>
    )
}
TodoListItem.propTypes = {
    toDo: PropTypes.object, 
    onRemoveTodo: PropTypes.func  
  };
export default TodoListItem;
