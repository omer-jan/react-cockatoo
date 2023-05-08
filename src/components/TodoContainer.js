
import TodoList from "./TodoList"; 
import styles from './TodoList.module.css';
import React, { useState, useEffect,useMemo  } from 'react'; 
import PropTypes from 'prop-types';
import AddTodoForm from "./AddTodoForm"; 
import { BASE_ID,BASE_URL,API_KEY } from "../constant";
const TodoContainer = ({tableName}) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isButtonCicked, setIsButtonCicked] = useState(false);
    const [sortType, setSortType] = useState(true);
    const header={
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    };
    const FULL_URL=`${BASE_URL}/${BASE_ID}/Default?view=${tableName}`;  
    useEffect(()=>{ 
      const fetchTodos = async () => {
        try {
          const response = await fetch(
            `${FULL_URL}&sort[0][field]=Title&sort[0][direction]=asc`,
            { headers: header }
          );
          const { records } = await response.json();
          const todos = records.map(({ id, fields: { Title } }) => ({ id, title: Title }));
          setTodoList(todos);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTodos(); 
    },[])  
    const addTodo =async (title)=>{
      setIsButtonCicked(true);
      const response = await fetch(FULL_URL, {
        method: 'POST',
        headers: header,
        body: JSON.stringify({
          fields: {
            Title: title, 
          },
        }),
      });
      const data = await response.json(); 
      const newTodo =  {
        id: data.id,
        title: data.fields.Title
    };
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
    setIsButtonCicked(false); 
    }
    const sortFunction = (objectA, objectB, sortType) => {
      if(sortType) {
        // Sort by ascending order
        return objectA.title.localeCompare(objectB.title);
      } else {
        // Sort by descending order
        return objectB.title.localeCompare(objectA.title);
      } 
    }
    const sortedTodoList = useMemo(() => {
      return [...todoList].sort((objectA, objectB) => sortFunction(objectA, objectB, sortType));
    }, [todoList, sortType]);
    const sortTodoListHandler = () => { 
      const type = !sortType;
      setSortType(type);
      const sortedList = [...todoList].sort((objectA, objectB) => sortFunction(objectA, objectB, type));
      setTodoList(sortedList);
    };
    const removeTodo = async (id) => {  
      try {
        const DELETE_URL=`${BASE_URL}/${BASE_ID}/Default/${id}?view=${tableName}`;
        const response = await fetch(DELETE_URL, {
          method: 'DELETE',
          headers:header, 
        });  
        const data = await response.json(); 
        if(data.deleted) {
          setTodoList((previousTodoList) => previousTodoList.filter((todo) => todo.id !== id));
        }
      
      } catch (error) {
        console.error(error);
      } 
    };

    return (
    <div className={styles.wrapper}>      
        <div className={styles.container}> 
        {/* <h1>{tableName} todo</h1>  no need for this */}
        <AddTodoForm onAddTodo={addTodo} isButtonClicked={isButtonCicked}/>  
        { 
            isLoading ? 
            <p className={styles.title}>Loading...</p>
            : 
            <div className={styles.todoItemContainer}>                          
            <TodoList onRemoveTodo={removeTodo} onSortTodoList={sortTodoListHandler} sortType={sortType} todoList={sortedTodoList} />
            </div>
        }
        </div>
    </div>
    )
}
TodoContainer.propTypes = {
  tableName: PropTypes.string
};
export default TodoContainer; 