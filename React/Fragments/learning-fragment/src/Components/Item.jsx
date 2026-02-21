import React from 'react'
const Item = (props) => {
  return (
    <>
    
      <li key={props.fooditem} className="list-group-item">{props.fooditem}</li>

    </>
  )
}

export default Item
