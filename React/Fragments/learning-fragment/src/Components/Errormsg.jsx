import React from 'react'
import Fooditem from './Fooditem';
const Errormsg = ({item}) => {
  //  let foodItem = ['Dal','Green Vegetable','Roti','Salad','Milk']
  return (
    <>
      {item.length===0&&<h3>I am still hungry</h3>}
    </>
  )
}

export default Errormsg;
