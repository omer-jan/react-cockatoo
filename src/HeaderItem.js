import style from './cssModule/TodoList.module.css'
const HeaderItem=({title,count})=>{   
    return (
        <div className={style.col}>
        <div className={style.box}>
        <div className={style.boxContent}>
          <span className={style.boxText}>{title}</span>
          <span className={style.boxNumber}>{count} Tasks</span>
        </div> 
      </div>
      </div>
      );
}
export default HeaderItem