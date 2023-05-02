import HeaderItem from './HeaderItem'; 
import style from './TodoList.module.css';
const Header=()=>{   
    return (
        <div className={style.container}>   
              <h1 className={`${style.appTitle} ${style.textWhite}`}>Todo List</h1>
              <div className={style.row}>  
                <HeaderItem title="Personal" count={3}/>
                <HeaderItem title="Work" count={4}/> 
                <HeaderItem title="Fitness" count={3}/>                 
                <HeaderItem title="Books" count={8}/> 
                <HeaderItem title="Travel" count={2}/> 
              </div>        
        </div>
      );
}
export default Header