import React from 'react'

const Props = (props) => {

  return (
    <div>
      <h2>{props.name}</h2>
      <h2>Technologies List</h2>

      <ul>
        {props.tech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2>User Details</h2>
      <p>Name:{props.obj.name}</p>
      <p>Age:{props.obj.age}</p>
      <ul>
        {props.obj.arr1.map((item,i)=>(
          <li key={i}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Props
