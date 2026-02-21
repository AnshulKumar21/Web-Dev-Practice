import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import React from "react";
import Fooditem from "./Components/Fooditem";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {

  //Map Method
  let foodItems = ['Dal','Green Vegetable','Roti','Salad','Milk']

  //conditional rendering.
// let emptyMessage = foodItems.length===0 ? <h3> I am still hungry.</h3>: null;
let textToShow = "Food Item Entered By Use"
const handleOnChange=(e)=>{
    console.log(e.target.value);
    textToShow = e.target.value;
  }
  return(
    <>
<Container>
  <h1 className="foodHeading"> Healthy Food</h1>
  
 <Errormsg item={foodItems}></Errormsg>
 <FoodInput handleOnChange={handleOnChange}></FoodInput>
 <p>{textToShow}</p>
 <Fooditem item={foodItems}></Fooditem>
 
  
</Container>

</>
  ) 
}
  export default App;
   