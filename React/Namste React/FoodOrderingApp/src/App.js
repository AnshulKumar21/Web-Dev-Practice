import React, { Component } from "react"
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body"



const App = ()=>{
  return(
    <div className="app">
<Header></Header>
<Body>
</Body>
    </div>
  )
};
export default App;
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<AppLayout />);
// const parent=React.createElement("div",{id: "parent"}, "Hello");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
