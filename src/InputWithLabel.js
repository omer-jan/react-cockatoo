import React,{useRef,useEffect} from "react" 
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
            <label htmlFor="todoTitle" >{children}</label>
            <input value={inputValue} 
                   onChange={onInputChange}
                   id={id}
                   ref={inputRef}
                   placeholder={placeholder}
                   name="{name}"
                   
                />
        </>
      );
}
export default InputWithLabel