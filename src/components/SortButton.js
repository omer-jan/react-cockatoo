import buttonStyle from './button.module.css'; 
const SortButton=({ onClick, isActive })=>{     
      const ascendingArrow  ="a to z";
      const descendingArrow ="z to a";
 
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