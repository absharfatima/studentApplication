import React from 'react'

const ChildComponent = (props) => {
   const {message} = props; 
  return (
    <div>
      <h2> {message} </h2>
    </div>
  )
}

export default ChildComponent
