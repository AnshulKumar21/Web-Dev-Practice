import React from 'react'
import Props from './props/Props'

const App = () => {
  const name = "Anshul"

  const techArray = ["JavaScript", "React", "MongoDB", "Node"]
  const user  ={
    name:"Anshul",
    age: 21,
    arr1:["JavaScript", "React", "MongoDB", "Node"],
    
  }

const students = [
  { id: 1, name: "Rahul", marks: 80 },
  { id: 2, name: "Amit", marks: 75 },
  { id: 3, name: "Rohit", marks: 90 }
];
const showSum =(a,b)=>{
  console.log(a+b);
  alert(a+b);
}
  return (
    <div>
      <h1>Props Example</h1>

      <Props tech={techArray}
      name={name}
      obj = {user}
      students={students}
       sum={showSum}/>
     
    </div>
  )
}

export default App
