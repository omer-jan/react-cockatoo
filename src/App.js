import NavigationMenu from "./components/NavigationMenu";
import TodoContainer from "./components/TodoContainer";
import Contact from "./components/Contact";
import About from "./components/About"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {  
  return (
    <BrowserRouter>
    <NavigationMenu/>
      <Routes> 
          <Route path="/" element={<TodoContainer tableName="toDoTbl"/>} />
          <Route path="/todo" element={<TodoContainer/>} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )  
}
export default App;
