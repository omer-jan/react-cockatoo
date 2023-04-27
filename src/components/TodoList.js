import React, { useState, useEffect } from 'react'; 
import TodoListItem from "./TodoListItem";
import SortButton from "./SortButton";
import styles from './TodoList.module.css'; 
import PropTypes from 'prop-types';
import style from './TodoList.module.css'; 

const TodoList=({todoList,onRemoveTodo,onSortTodoList})=>{   
  const [sortByNameAsc, setSortByNameAsc] = useState(true); 

  const sortByNameHandler = () => {
    setSortByNameAsc(!sortByNameAsc);
    onSortTodoList(sortByNameAsc); 
  };
    return (
        <div>          
          <div className={`${styles.toDoTitle} ${style.textHalfWhite}`}>Today's tasks</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>            
            <p className={`${styles.pText} ${styles.textWhite}`}>Sort by name :             
              <SortButton onClick={sortByNameHandler} isActive={sortByNameAsc}></SortButton>
            </p>           
          </div>
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
  onRemoveTodo: PropTypes.func,
  onSortTodoList: PropTypes.func 
};
export default TodoList