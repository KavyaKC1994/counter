import React, { useState } from "react";

function CounterApp() {
  // State variable to store the count
  const [count, setCount] = useState(0);

  // Handler function to increment the count
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Handler function to decrement the count
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;
