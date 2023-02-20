import React from "react"
import TodoListItem from "./TodoListItem";
const TodoList=({todoList,onRemoveTodo})=>{   
    return (
        <div>         
          <ul>
          {todoList.map(function(todo){
            return (
            //  <TodoListItem onRemoveTodo={onRemoveTodo} key={todo.id} toDo={todo}/>
             <TodoListItem onRemoveTodo={onRemoveTodo}  key={todo.id} toDo={todo}/>
            )
          })}
          </ul>       
        </div>
      );
}
export default TodoList