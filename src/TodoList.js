import React from "react"
const todoList=[
    {
      id:1,
      title:"Review the lectures"
    },
    {
      id:2,
      title:"Complete the assignment"
    },
    {
      id:3,
      title:"Submit the assignment"
    },
    {
      id:4,
      title:"Prepare for the next session"
    },
    
  ]
let TodoList=()=>{
    return (
        <div>
         
          <ul>
          {todoList.map(function(todo){
            return (
              <li key={todo.id}>{todo.title}</li>
            )
          })}
          </ul>       
        </div>
      );
}
export default TodoList