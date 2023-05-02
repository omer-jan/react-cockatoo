import buttonStyle from './button.module.css'; 
const SortButton=({ onClick, isActive })=>{     
      const ascendingArrow  ="z to a";
      const descendingArrow ="a to z";
 
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