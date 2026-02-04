import React from 'react'
import Studentmarks from './Studentmarks'

const Student = () => {
  const handleClick=()=>{
    alert("Button Clicked!")
  }
  const handleDClick=()=>{
    alert("Clicked  2 times")
  }
  return (
    <div>
      <button onClick={handleClick}>Clicke me</button>
      <button onDoubleClick={handleDClick}>Double,click</button>
      <Studentmarks/>
    </div>
  )
}

export default Student
