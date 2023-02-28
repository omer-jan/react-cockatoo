import React from 'react'
const TodoListItem=({toDo,onRemoveTodo })=>{  
    return(
    <li key={toDo.id}>
        {toDo.title}  
        <button type="button" onClick={()=>onRemoveTodo(toDo.id)}>Remove</button>
    </li>
    )
}
export default TodoListItem;
