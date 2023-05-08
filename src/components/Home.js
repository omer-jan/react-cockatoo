import style from './TodoList.module.css';
import buttonStyle from './button.module.css';
import { Link } from 'react-router-dom'; 
const Home=()=>{   
    return (
        <div className={style.wrapper}>   
              <h1 className={`${style.appTitle} ${style.textWhite}`}>Home</h1>
              <div className={`${style.toDoTitle} ${style.textHalfWhite}`}>Welcome to our Todo application</div>
              <hr/>
              <div className={`${style.toDoTitle} ${style.textHalfWhite}`}> The simple and intuitive solution for effortlessly managing your daily tasks and priorities. With our app, you can stay organized and on-task, tackling your to-do list with ease.<br/>
               So why wait? start streamlining your life!</div>
               
               <Link to="todo" className={buttonStyle.button}>
                  Todo List
               </Link>
                

              
        </div>
      );
}
export default Home