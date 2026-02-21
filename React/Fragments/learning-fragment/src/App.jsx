import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import React from "react";
import Fooditem from "./Components/Fooditem";
import Errormsg from "./Components/Errormsg";
import Items from "./Components/Item";
function App() {

  //Map Method
  let foodItems = ['Dal','Green Vegetable','Roti','Salad','Milk']
  //conditional rendering.
// let emptyMessage = foodItems.length===0 ? <h3> I am still hungry.</h3>: null;
  return(
<>
  <h1> Healthy Food</h1>
 <Errormsg item={foodItems}></Errormsg>
 <Fooditem item={foodItems}></Fooditem>
 <Items></Items>
  
</>
  ) 
}
  export default App;
   