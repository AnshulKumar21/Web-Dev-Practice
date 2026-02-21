import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/Todoitems";
function App() {
  const todoItems=[{
    name:"Buy Milk",
    dueDate:"4/10/2023",
  },{
  name:"Go to College",
    dueDate:"4/10/2023",
  },
  {
  name:"Go to Gym",
    dueDate:"4/10/2023",
  }
]

  return( 
  <center className="todo-container">
    <AppName/>
    <Addtodo/>
    <Todoitems todoItems={todoItems}></Todoitems>
   
    
  </center>
  );

}

export default App
