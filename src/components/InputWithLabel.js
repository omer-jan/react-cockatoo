import React,{useRef,useEffect} from "react"  
import styles from './TodoList.module.css'
import PropTypes from 'prop-types'; 
const InputWithLabel=(
    {
        children,
        id,
        name,
        placeholder,
        inputValue,
        onInputChange})=>{  
    const inputRef=useRef(); 
    useEffect(()=>{
        inputRef.current.focus();
    })
    return (
        <>         
            <label htmlFor="todoTitle" className={`${styles.lable} ${styles.textWhite}`}>{children}</label>
            <input value={inputValue} 
                   onChange={onInputChange}
                   id={id}
                   className={styles.formControl}
                   ref={inputRef}
                   placeholder={placeholder}
                   name="{name}"
                   
                />
        </>
      );
}
InputWithLabel.propTypes = {
    children: PropTypes.node,  
    id: PropTypes.string,  
    name: PropTypes.string,  
    placeholder: PropTypes.string,  
    inputValue: PropTypes.string,  
    onInputChange: PropTypes.func  
  };
export default InputWithLabel