import React from "react"
import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'; 
import PropTypes from 'prop-types';
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
TodoList.propTypes = {
  todoList:PropTypes.arrayOf(PropTypes.object),
  onRemoveTodo: PropTypes.func 
};
export default TodoList