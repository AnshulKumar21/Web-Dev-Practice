import React from 'react'
import Item from './Item'
const Fooditem = ({item}) => {
  // let foodItem = ['Dal','Green Vegetable','Roti','Salad','Milk']
  
  return (
    <>
     <ul className="list-group">
    {item.map((item)=> (
     <Item key ={item}
     fooditem = {item}>
      
     </Item>
     ))}
 
</ul>
    </>
  )
}

export default Fooditem
