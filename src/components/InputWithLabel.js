import React,{useRef,useEffect} from "react"  
import styles from './TodoList.module.css'
import PropTypes from 'prop-types'; 
const InputWithLabel=({ todoTitle, handleTitleChange, children,name,placeholder })=>{  
    const inputRef=useRef(); 
    useEffect(()=>{
        inputRef.current.focus();
    }, [])
    return (     
      <div className={styles.formGroup}>
         <label htmlFor={name} className={`${styles.lable} ${styles.textWhite}`}>{children}</label>
         <input value={todoTitle} 
                   onChange={handleTitleChange} 
                   type="text"
                   className={styles.formControl}
                   ref={inputRef}
                   placeholder={placeholder}
                   name={name}
                   id={name}
                   
                />
    </div>
    
    );
  
}
InputWithLabel.propTypes = {
    children: PropTypes.node,   
    name: PropTypes.string,  
    placeholder: PropTypes.string,  
    todoTitle: PropTypes.string,  
    handleTitleChange: PropTypes.func  
  };
export default InputWithLabel 