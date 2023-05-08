import style from './TodoList.module.css';
const About=()=>{   
    return (
        <div className={style.wrapper}>   
              <h1 className={style.textWhite}>About</h1> 
              <div className={`${style.toDoTitle} ${style.textSmokWhite}`}>About app</div>
              <hr/>
              <div className={`${style.toDoTitle} ${style.textHalfWhite}`}> The simple and intuitive solution for effortlessly managing your daily tasks and priorities. With our app, you can stay organized and on-task, tackling your to-do list with ease.<br/>
                </div>
                <br/>
                <br/>
                <div className={`${style.toDoTitle} ${style.textSmokWhite}`}>About developer</div>
              <hr/>
              <div className={`${style.toDoTitle} ${style.textHalfWhite}`}>This app developed by Mohammad Zubair Akrami to complete the react course project requiremen</div>
              
        </div>
      );
}
export default About