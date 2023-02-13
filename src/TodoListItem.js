import React from 'react'
let TodoListItem=(props)=>{

    // Destructing props.toDo
    const{id,title}=props.toDo;
    
    return <li key={id}>{title}</li> 
}
 
export default TodoListItem;
