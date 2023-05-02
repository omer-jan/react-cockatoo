import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {  
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<TodoContainer/>} />
          <Route path="/new" element={ <h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )  
}
export default App;
