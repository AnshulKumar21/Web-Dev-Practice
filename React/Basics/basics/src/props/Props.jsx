import React from 'react'

const Props = (props) => {

  return (
    <div>
      <h2>Technologies List</h2>

      <ul>
        {props.tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Props
