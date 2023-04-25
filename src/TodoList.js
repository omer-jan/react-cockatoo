import React from "react"
import TodoListItem from "./TodoListItem";
import styles from './cssModule/TodoList.module.css'; 
const TodoList=({todoList,onRemoveTodo})=>{   
    return (
        <div>
          
          <div className={styles.toDoTitle}>Today's tasks</div>
          {todoList.map(function(todo){
            return ( 
             <TodoListItem onRemoveTodo={onRemoveTodo}  key={todo.id} toDo={todo}/>
            )
          })}      
        </div>
      );
}
export default TodoList