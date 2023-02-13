import React from 'react'
const TodoListItem=({toDo})=>{  
    return <li key={toDo.id}>{toDo.title}</li> 
}
export default TodoListItem;
