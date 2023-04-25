import HeaderItem from './HeaderItem';
import style from './cssModule/TodoList.module.css'
const Header=()=>{   
    return (
        <div className={style.container}>   
              <h1 className={style.appTitle}>Todo List</h1>
              <div className={style.row}> 
                <HeaderItem title="Personal" count="3"/>
                <HeaderItem title="Work" count="6"/> 
                <HeaderItem title="Fitness" count="2"/>                 
                <HeaderItem title="Books" count="6"/> 
                <HeaderItem title="Travel" count="2"/> 
              </div>        
        </div>
      );
}
export default Header