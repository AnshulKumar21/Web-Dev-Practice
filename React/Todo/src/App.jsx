import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Todoitem2";
import "./App.css";
function App() {

  return( 
  <center className="todo-container">
    <AppName/>
    <Addtodo/>
    <div className="items-container">
      <Todoitem1/>
    <Todoitem2/>
    </div>
    
  </center>
  );

}

export default App
