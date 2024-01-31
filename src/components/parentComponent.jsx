import React from 'react'
import ChildComponent from './childComponent';

const ParentComponent = () => {
  const messageText = "Hello from parent component";  
  return (
    <div>
      <ChildComponent message={messageText} />
    </div>
  )
}

export default ParentComponent;
