import React from "react"
import ReactDOM from "react-dom/client";
// const Header = ()=>{
//   return(
//     <div className="header">
//       <div>
//       </div>
//     </div>
//   )
// }
// const RestaurantCard = (props)=>{
//   return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//       <img
//       className="res-logo"
//       alt="res-logo"
//       src="https://www.vecteezy.com/vector-art/11468885-food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template"
//       ></img>
//       <h3></h3>
      
//     </div>
//   )
// }



// const AppLayout = ()=>{
//   return(
//     <div class="app">

//     </div>
//   )
// }
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<AppLayout />);
const parent = React.createElement("div",{id: "parent"}, "Hello lodu");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);