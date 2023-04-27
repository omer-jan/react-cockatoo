import buttonStyle from './button.module.css'; 
const SortButton=({ onClick, isActive })=>{     
      const ascendingArrow  =<i className="material-icons" >arrow_downward</i>;
      const descendingArrow =<i className="material-icons" >arrow_upward</i>;
 
      return (
        <button
        className={buttonStyle.sortButton} 
        onClick={onClick}
        > 
          {isActive ? ascendingArrow : descendingArrow}
        </button>
      );
}
export default SortButton;