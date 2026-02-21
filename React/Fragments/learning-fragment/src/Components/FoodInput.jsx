import React from 'react'
import Style from "./FoodInput.module.css"
const FoodInput = ({handleOnChange}) => {
  
  return (
  
   <input type="text" placeholder='Enter Food Item here'
   className={Style.foodInput}
   onChange={handleOnChange}></input>

  
  )
}

export default FoodInput
