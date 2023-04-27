import React,{useRef,useEffect} from "react" 

import styles from './cssModule/TodoList.module.css'; 

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
            <label htmlFor="todoTitle" className={styles.lable} >{children}</label>
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
export default InputWithLabel