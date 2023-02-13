import React from "react"
import TodoListItem from "./TodoListItem";
let TodoList=(props)=>{ 

  // Destructing  props
  const {todoList}=props;
    return (
        <div>         
          <ul>
          {todoList.map(function(todo){
            return (
             <TodoListItem key={todo.id} toDo={todo}/>
            )
          })}
          </ul>       
        </div>
      );
}
export default TodoList