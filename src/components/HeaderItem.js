import style from './TodoList.module.css'
import PropTypes from 'prop-types';
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
HeaderItem.propTypes = {
  title: PropTypes.string,  
  count: PropTypes.number  
};
export default HeaderItem