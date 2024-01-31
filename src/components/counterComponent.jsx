import React, { useState } from 'react';

const CounterComponent = () => {
  // Using the useState hook to initialize state
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Buttons to increment and decrement the count */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
