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

  return (
    <div>
      <h1>Props Example</h1>

      <Props tech={techArray}
      name={name}
      obj = {user}/>

    </div>
  )
}

export default App
